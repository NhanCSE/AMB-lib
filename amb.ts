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
    username?: string,
    password?: string,    
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
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, {
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

    async getScore() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_score`, {
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

export interface TeacherID {
    teacher_id: string
}

export interface UpdatingTeacherByTeacherInfo {
    contact_email?: string;
    phone_number?: string;
    address?: string;
}

export interface UpdateTeacherByAdminInfo {
    fullname?: string;
    gender?: "Nam" | "Nữ";
    date_of_birth?: string; // Assuming date is in string format (you can use a specific date type if needed)
    credential_id?: string;
    contact_email?: string;
    phone_number?: string;
    password?: string; // Assuming password is a string
    address?: string;
    home_class?: string;
    faculty?: string;
    major?: string;
    subject?: string[];
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

    async updateByTeacher(info: UpdatingTeacherByTeacherInfo, condition: TeacherID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?teacher_id=${condition.teacher_id}`, info, {
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

    async updateByAdmin(info: UpdateTeacherByAdminInfo, condition: TeacherID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?teacher_id=${condition.teacher_id}`, info, {
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
    async delete(condition: TeacherID) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?teacher_id=${condition.teacher_id}`, {
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

    async findByTeacher() {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, {
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

    async findTeacherRegisteredClass() {
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


export interface CreatingAdminInfo {
    fullname: string;
    admin_id: string;
    username: string;
    password: string;
}


class AdminOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/admins";
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

    async create(info: CreatingAdminInfo) {
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
}


export interface CreatingCourseInfo {
    course_name: string;
    credits: number;
    course_type: string;
    major: string[];
    faculty: string;
    course_condition: any[]; // Assuming this can be an array of any type
    student_condition: number;
}

export interface UpdatingCourseInfo {
    course_name?: string;
    credits?: number;
    course_type?: string;
    major?: string[];
    faculty?: string;
    course_condition?: any[]; // Assuming this can be an array of any type
    student_condition?: number;
}

export interface CourseID {
    course_id: string
}
class CourseOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/courses";
    }

    async create(info: CreatingCourseInfo) {
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

    async update(info: UpdatingCourseInfo, condition: CourseID) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?course_id=${condition.course_id}`, info, {
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

    async delete(condition: CourseID) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?course_id=${condition.course_id}`, {
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

    async findAllCourses(info: UpdatingCourseInfo) {
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

    async findClasses(condition: CourseID) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes?course_id=${condition.course_id}`, {
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


export interface CreateClassInfo {
    course_id: string;
    program: string;
    semester: string;
    day: string;
    max_students: number;
    period: number[];
    room: string;
    weeks: number[];
}

export interface RegisterClassInfo {
    course_id: string;
    class_id: string;
}

export interface ClassID {
    class_id: string;
}

export interface UpdateScoreInfo {
    student_id: string;
    midterm: number;
    final: number;
    lab: number;
    exeercise: number;
}


class ClassOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/classes";
    }

    async create(info: CreateClassInfo) {
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

    async register(info: RegisterClassInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/register`, info, {
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
    
    async updateScore(info: UpdateScoreInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/update_score`, info, {
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

    async cancelRegister(info: RegisterClassInfo) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/cancel_register`, info, {
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

}

export {
	StudentOperation,
    TeacherOperation,
    AdminOperation,
    CourseOperation,
    ClassOperation
}