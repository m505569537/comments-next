import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import UserForm from '../components/Form';
import { Table } from 'antd';

const columns = [
    {
        title: 'name',
        key: 'name',
        dataIndex: 'name'
    },
    {
        title: 'review',
        key: 'review',
        dataIndex: 'review'
    },
    {
        title: 'rating',
        key: 'rating',
        dataIndex: 'rating'
    }
]

const pusher = new Pusher('810359f5a0cdaad46767', {
    cluster: 'ap3',
    encrypted: true
})

const channel = pusher.subscribe('rotten-pepper')

class Main extends Component {

    state = {
        data: []
    }

    componentDidMount () {
        this.receiveData()
    }

    receiveData = () => {
        channel.bind('new-movie-review', data => {
            this.setState({
                data: [...this.state.data, data]
            })
        })
    }

    handleFormSubmit = (data) => {
        axios.post('http://localhost:8080/add-review', data)
            .then(res => {
                console.log('received by server');
            }).catch(err => {
                throw err
            })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <UserForm handleFormSubmit={this.handleFormSubmit} />
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowKey='name'
                />
            </div>
        );
    }
}

export default Main;