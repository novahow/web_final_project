import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Button, Input, message, Tag } from 'antd'
import Modal from 'react-bootstrap/Modal'
import useChat from './useChat'

const Create = (props) => {
    const { getUsers, addUser, addLoginUser, checkLogin } = useChat()
    const [exp, setExp] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [dep, setDep] = useState('');
    const [fb, setFb] = useState('');
    const [ig, setIg] = useState('');
    const [birth, setBirth] = useState('');
    const [photo, setPhoto] = useState('');
    const [gend, setGend] = useState(0)
    const [newGirl, setnewGirl] = useState({})
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="/action_page.php">
                    <Input placeholder='name'
                        onChange=
                        {(e) => setName(e.target.value)}
                    />
                    <Input placeholder='age'
                        onChange=
                        {(e) => setAge(e.target.value)}
                    />
                    <Input placeholder='department'
                        onChange=
                        {(e) => setDep(e.target.value)}
                    />
                    <Input placeholder='fb'
                        onChange=
                        {(e) => setFb(e.target.value)}
                    />
                    <Input placeholder='ig'
                        onChange=
                        {(e) => setIg(e.target.value)}
                    />
                    <Input placeholder='birth'
                        onChange=
                        {(e) => setBirth(e.target.value)}
                    />
                    <Input placeholder='photo_url'
                        onChange=
                        {(e) => setPhoto(e.target.value)}
                    />
                    <Input placeholder='gender(0~2)'
                        onChange=
                        {(e) => setGend(e.target.value)}
                    />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={async () => {
                    const u = newGirl;
                    u['name'] = name;
                    u['IG'] = ig;
                    u['department'] = dep;
                    u['FB'] = fb;
                    u['birthday'] = birth;
                    u['gender'] = parseInt(gend);
                    u['photo'] = photo;
                    u['age'] = parseInt(age);
                    if (name != '' && ig != '' &&
                        dep != '' &&
                        fb != '' && birth != ''
                        && gend != ''
                        && photo != ''
                        && age != '') {
                        addUser(u);
                    }
                    await props.onHide();
                }}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Create
