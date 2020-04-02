import axios from "axios";

export default {
  // Gets room from database
  getRooms: function (q) {
    return axios.get("/api/room");
  },
  // Gets all saved room
  updateRoom: function (id, data) {
    return axios.put(`/api/room/${id}`, data);
  },
  // Deletes the saved room with the given id
  deleteRoom: function (id) {
    return axios.delete("/api/room/" + id);
  },
  // Saves an room to the database
  addRoom: function (roomData) {
    return axios.post("/api/room", roomData);
  }
};