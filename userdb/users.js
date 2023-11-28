const users = {
    'vasoshoni@gmail.com': {
        id: '0',
        name: '',
        phoneNum: '0500250000',
        login: 'Shoni',
        pass: '12345',
        avatar: 'avatars/269312438.png',
        friends: ['vasosahka@gmail.com', 'vasomaksum@gmail.com'],
        post: [
            {
                date: '28.11.23',
                title: 'Програміст...'
            },
            {
                date: '27.11.23'
            },
            {
                date: '26.11.23'
            }
        ]
    },
    'vasomaksum@gmail.com': {
        id: '1',
        name: '',
        phoneNum: '0500250000',
        login: 'Max',
        pass: '12345',
        avatar: 'avatars/max.jfif',
        friends: ['vasosahka@gmail.com', 'vasoshoni@gmail.com'],
        post: [
            {
                date: '28.11.23',
                title: 'Клапі...'
            },
            {
                date: '27.11.23'
            },
            {
                date: '26.11.23'
            }
        ]
    },
    'vasosahka@gmail.com': {
        id: '2',
        name: '',
        phoneNum: '0500250000',
        login: 'Sahka',
        pass: '12345',
        avatar: 'avatars/sashka.jfif',
        friends: ['vasoshoni@gmail.com', 'vasomaksum@gmail.com'],
        post: [
            {
                date: '28.11.23',
                title: 'Привіт...'
            },
            {
                date: '27.11.23'
            },
            {
                date: '26.11.23'
            }
        ]
    }
}

exports.users = users;