import axios, { AxiosResponse } from "axios";
const FormData = require("form-data");

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

export interface CreatingUserInfo {
    fullname: string,
    phone_number: string,
    email: string,
}
export interface CreatingStudentInfo {
    fullname: string,                 
    date_of_birth: string,                                     
    gender: string,                               
    credential_id: string,               
    phone_number: string,                  
    contact_email: string,     
    address: string,                                            
    class: string,                           
    faculty: string,    
    major: string,                  
    level: string,                            
    program: string                                                        
}

export interface UpdatingStudentInfoByStudent {             
    phone_number?: string,                  
    contact_email?: string,     
    address?: string,                                                                                                   
}
export interface UpdatingStudentInfoByAdmin {
    fullname?: string,                 
    date_of_birth?: string,                                     
    gender?: string,                               
    credential_id?: string,               
    phone_number?: string,                  
    contact_email?: string,     
    address?: string,                                            
    class?: string,                           
    faculty?: string,    
    major?: string,                  
    level?: string,                            
    program?: string                                                        
}

export interface FindingStudentInfoByAdmin {
    fullname?: string,                 
    student_id?: string,                              
    credential_id?: string,                                                           
    class?: string,                           
    faculty?: string,    
    major?: string,                  
    level?: string,                            
    program?: string                                                        
}

export interface StudentID {
    student_id: string
}

export interface UpdatingPassword {
    username: string,
    password: string,
    new_password: string                                                        
}

export interface CreatingStudentByFile {
    file: File
}

class StudentOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/students";
    }

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message };
        } catch (error: any) {
            console.log("Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async create(info: CreatingStudentInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error create new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async createByFile(info: CreatingStudentByFile) {
        try {
            const formData = new FormData();
            formData.append("file", info.file);

            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create_by_file`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            const data = response.data;
			return { error: data.error, message: data.message };
        } catch (error: any) {
            console.error('Error creating orders by file:', error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updateByStudent(info: UpdatingStudentInfoByStudent, condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updateByAdmin(info: UpdatingStudentInfoByAdmin, condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updatePassword(info: UpdatingPassword) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update_password`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }
    async delete(condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?student_id=${condition.student_id}`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findByStudent() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findByAdmin(info: FindingStudentInfoByAdmin) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findStudentRegisteredClass() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

}

export interface CreatingTeacherInfo {
    fullname: string;
    gender: "Nam" | "Nữ";
    date_of_birth: string; // Assuming date is in string format (you can use a specific date type if needed)
    credential_id: string;
    contact_email: string;
    phone_number: string;
    address: string;
    home_class: string;
    degree: "Cử nhân" | "Thạc sĩ" | "Tiến sĩ";
    falculty: string; // Assuming this is supposed to be "faculty"
    major: string;
    subject: string[];
}


class TeacherOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/teachers";
    }

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message };
        } catch (error: any) {
            console.log("Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async create(info: CreatingTeacherInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error create new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updateByStudent(info: UpdatingStudentInfoByStudent, condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updateByAdmin(info: UpdatingStudentInfoByAdmin, condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async updatePassword(info: UpdatingPassword) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update_password`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }
    async delete(condition: StudentID) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?student_id=${condition.student_id}`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findByStudent() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findByAdmin(info: FindingStudentInfoByAdmin) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    async findStudentRegisteredClass() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error update new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }
}


export {
	StudentOperation,
}