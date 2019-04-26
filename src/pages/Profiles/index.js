import React, { Component } from 'react';
import axios from '../../axiosConfig';
import ProfileCard from '../../components/ProfileCard'

class Profiles extends Component {
    state = {
        items: null,
        loading: true
    }

    componentDidMount () {
        const url = 'search?length=32'
        axios.get(url)
            .then( response => {
                this.setState( { loading: false, items: response.data.items })
            })
            .catch( error => {
                this.setState({loading: false});
                console.log(error)
            } );
    }
    render () {
       let profilePreview = null;
        if (this.state.loading) {
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
