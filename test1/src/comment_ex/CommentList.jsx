import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "성지훈1",
        comment: "안녕1"
    },
    {
        name: "성지훈2",
        comment: "안녕2"
    },
    {
        name: "성지훈3",
        comment: "안녕3"
    },
];

const CommentList = () => {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
};

export default CommentList;