import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

function FriendsList() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				console.log({ res });
				setFriends(res.data);
			})
			.catch((err) => {
				console.log('Oh-no, something happend: ', err);
			});
	}, []);

	return (
		<div>
			<h1>My Friends:</h1>
			{friends.map((friend) => {
				return (
					<div
						key={friend.id}>
						<h3>{friend.name}</h3>
						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<p>{friend.age}</p>
							<p>{friend.email}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default FriendsList;
