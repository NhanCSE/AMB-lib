// class UserOperation {
//     private baseUrl: string;
//     constructor() {
//         this.baseUrl = "http://localhost:5000/api/v1/users";
//     }

//     async getAuthenticatedUserInfo() {
//         try {
//             const response = await axios.get(`${this.baseUrl}/get_info`, {
//                 withCredentials: true,
//             });

//             const data = response.data;
//             return { error: data.error, info: data.info, message: data.message };
//         } catch (error: any) {
//             console.log("Error getting authenticated user info: ", error?.response?.data);
//             console.error("Request that caused the error: ", error?.request);
//             return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
//         }
//     }
// }