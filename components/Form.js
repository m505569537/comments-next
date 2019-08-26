import React, { Component } from 'react';
import { Form, Input, Button, Table } from 'antd'

class UserForm extends Component {

    state = {
        name: '',
        review: '',
        rating: ''
    }

    handleSubmit = () => {
        this.props.handleFormSubmit(this.state);
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        const { name, review, rating } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemlayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        }
        return (
            <Form { ...formItemLayout }>
                <Form.Item label="Name">
                    <Input value={name} onChange={(e) => this.handleChange(e, 'name')} />
                </Form.Item>
                <Form.Item label="Review">
                    <Input value={review} onChange={e => this.handleChange(e, 'review')} />
                </Form.Item>
                <Form.Item label="Rating">
                    <Input value={rating} onChange={e => this.handleChange(e, 'rating')} />
                </Form.Item>
                <Form.Item { ...tailFormItemlayout }>
                    <Button onClick={this.handleSubmit}>submit</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default UserForm;