import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트 좋아해',
    },
    gildong: {
        name: '홍길동',
        description: '고전소설',
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않음</p>
            )}
        </div>
    );
};

export default Profile;