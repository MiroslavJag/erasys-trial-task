import React, { Component } from 'react';
import axios, {GET_PROFILES, GET_ALL_PROFILES_IDS, GET_IDS} from '../../axiosConfig';
import ProfileCard from '../../components/ProfileCard'

class Profiles extends Component {
    state = {
        items: null,
        loading: true,
        error: false
    }

    createProfilesIdQuery = (items) => {
        let queryItemsIds = items.map(item => GET_IDS + item.id)
        return GET_ALL_PROFILES_IDS + queryItemsIds.toString().slice(1).replace(/,/g , "");
    }

    componentDidMount () {
        axios.get(GET_PROFILES)
            .then( response => {
                this.setState( { loading: false, items: response.data.items })
                axios.get(this.createProfilesIdQuery(response.data.items))
                    .then(response => {
                        let updatedItems = [...this.state.items]
                        updatedItems.map((item, index) => {
                            item["distance"] = response.data[index].location.distance
                            item["headline"] = response.data[index].headline
                        })
                        this.setState({items: updatedItems})
                    })
            }).catch( error => {
                this.setState({error: true, loading: false});
                console.log('ERROR: ',error)
            } );


    }
    render () {
       let profilePreview = null;
        if (this.state.error) {
            profilePreview = <h2>Something went wrong! Please try later.</h2>
        }
        else if (this.state.loading) {
            profilePreview = <h2>Content is Loading...</h2>
        } else {
            profilePreview = this.state.items.map(item => {
                return <ProfileCard {...item} key={item.id} param={item.id}/>
            })
        }
        return (
            <>
                {profilePreview}
            </>
        )
    }
}

export default Profiles
