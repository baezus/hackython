const url = `http://localhost:5000/user`;

class UserModel {
  static getOne(id) {
    return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in UserModel.getOne :', err);
      return { haiku: {} };
    });
  }

  static create(newUser) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in UserModel.create: ', err);
      return { user: {} };
    });
  }
}

export default UserModel;