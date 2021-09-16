import React from 'react';

export default function Cards({ robofriends }) {
  return (
    <>
      {robofriends.map((robofriend) => {
        const { id, username, name, email } = robofriend;
        return (
          <div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5" key={id}>
            <img
              src={`https://robohash.org/${username}?200x200`}
              alt="robofriend"
            />
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
