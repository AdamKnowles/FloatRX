const remoteURL = "http://localhost:5002";
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

export default Object.create(null, {
  //get entry
  get: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json());
    }
  },
  getAll: {
    value: function (resource) {
      return fetch(`${remoteURL}/${resource}`).then(e => e.json());
    }
  },

  getOneUnitMedications: {
      value: function (unitId) {
          return fetch(`${remoteURL}/unitMedications?unitId=${unitId}&_expand=medication`).then(e => e.json());
      }

  },
  getAllUnitMedications: {
    value: function () {
        return fetch(`${remoteURL}/unitMedications?_expand=medication`).then(e => e.json());
    }
  },
  getUserMeds:{
    value:function(resource, id) {
    return fetch(`${remoteURL}/${resource}?userId=${id}`)
    .then(e => e.json())}
    
  },
  getUserNotes:{
    value:function(resource, id) {
    return fetch(`${remoteURL}/${resource}?userId=${id}`)
    .then(e => e.json())}
    
  },

  //delete entry
  delete: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      }).then(e => e.json());
    }
  },

  //add entry
  post: {
    value: function (resource, newObject) {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      }).then(data => data.json());
    }
  },
 
});
