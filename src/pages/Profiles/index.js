import React, { Component } from 'react';
import axios, {GET_PROFILES, GET_ALL_PROFILES_IDS, GET_IDS, GET_CURSOR} from '../../axiosConfig';
import ProfileCard from '../../components/ProfileCard'
import './index.css'


class Profiles extends Component {
    state = {
        items: null,
        updatedItems: null,
        cursors: null,
        loading: true,
        error: false,
        total: null
    }

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset + 1;
        if (windowBottom >= docHeight) {
            if (this.state.updatedItems && this.state.updatedItems.length >= this.state.total){
                return null
            }
            this.getProfiles(this.state.cursors)
        } else {
        }
    }

    createProfilesUpdateQuery = (items) => {
        let queryItemsIds = items.map(item => GET_IDS + item.id)
        return GET_ALL_PROFILES_IDS + queryItemsIds.toString().slice(1).replace(/,/g , "");
    }

    getProfiles = (cursors) => {
        axios.get(cursors ? (GET_PROFILES + GET_CURSOR + cursors) : GET_PROFILES)
            .then( response => {
                this.setState( {
                    items: response.data.items,
                    cursors: response.data.cursors.after,
                    total: response.data.total
                })
                axios.get(this.createProfilesUpdateQuery(response.data.items))
                    .then(response => {
                        let itemsUpdate = [...this.state.items]
                        itemsUpdate.map((item, index) => {
                            item["distance"] = response.data[index].location.distance
                            item["city"] = response.data[index].location.city
                            item["headline"] = response.data[index].headline
                            item["age"] = response.data[index].personal.age
                        })
                        this.setState({
                            updatedItems: this.state.updatedItems
                                ? this.state.updatedItems.concat(itemsUpdate) : itemsUpdate,
                            loading: false
                        })
                    })
            }).catch( error => {
            this.setState({error: true, loading: false});
            console.log('ERROR: ',error)
        } );
    }

    componentDidMount () {
        this.getProfiles()
        window.addEventListener("scroll", this.handleScroll)
    }

    render () {
       let profilePreview = null;
        if (this.state.error) {
            profilePreview = <h2>Something went wrong! Please try later.</h2>
        }
        else if (this.state.loading) {
            profilePreview = <h2>Content is Loading...</h2>
        }
        else {
            profilePreview = this.state.updatedItems.map(item => {
                return <ProfileCard {...item}  key={item.id} />
            })
        }
        return <div className="profilesWrraper">{profilePreview}</div>
    }
}

export default Profiles
