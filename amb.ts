import axios, { AxiosResponse } from "axios";
const FormData = require("form-data");

export interface token {
    token: string
}

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

    //ROLE: STUDENT
    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message, token: data.token };
        } catch (error: any) {
            console.log("StudentOperation Error login: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async create(info: CreatingStudentInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error create new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async createByFile(info: CreatingStudentByFile, token: token) {
        try {
            const formData = new FormData();
            formData.append("file", info.file);

            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create_by_file`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: token.token
                    
                },
                withCredentials: true,
            });

            const data = response.data;
			return { error: data.error, message: data.message };
        } catch (error: any) {
            console.error('StudentOperation Error creating orders by file:', error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async updateByStudent(info: UpdatingStudentInfoByStudent, condition: StudentID, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error updateByStudent: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async updateByAdmin(info: UpdatingStudentInfoByAdmin, condition: StudentID, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?student_id=${condition.student_id}`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error updateByAdmin: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: DO NOT NEED ROLE AND TOKEN
    async updatePassword(info: UpdatingPassword) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update_password`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error updatePassword: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async delete(condition: StudentID, token: token) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?student_id=${condition.student_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error delete: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async findByStudent(token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, {}, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error findByStudent: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async findByAdmin(info: FindingStudentInfoByAdmin, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error findByAdmin: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async findStudentRegisteredClass(token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error findStudentRegisteredClass: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async getScore(token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_score`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("StudentOperation Error getScore: ", error?.response?.data);
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

export interface FindingTeacherInfoByAdmin {
    fullname?: string,                 
    teacher_id?: string,                              
    credential_id?: string,                                                           
    class?: string,                           
    faculty?: string,    
    major?: string,                  
    level?: string,                            
    program?: string,
    homeroom_class?: string,
    phone_number?: string                                                       
}

class TeacherOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/teachers";
    }

    //ROLE: TEACHER
    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message, token: data.token };
        } catch (error: any) {
            console.log("TeacherOperation Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async create(info: CreatingTeacherInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error create new user: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER
    async updateByTeacher(info: UpdatingTeacherByTeacherInfo, condition: TeacherID, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?teacher_id=${condition.teacher_id}`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error updateByTeacher: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async updateByAdmin(info: UpdateTeacherByAdminInfo, condition: TeacherID, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?teacher_id=${condition.teacher_id}`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error updateByAdmin: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER
    async updatePassword(info: UpdatingPassword, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update_password`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error updatePassword: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER
    async delete(condition: TeacherID, token: token) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?teacher_id=${condition.teacher_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error delete: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER
    async findByTeacher(token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, {}, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error findByTeacher: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMNIN
    async findByAdmin(info: FindingTeacherInfoByAdmin, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error findByAdmin: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER
    async findTeacherRegisteredClass(token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("TeacherOperation Error findTeacherRegisteredClass: ", error?.response?.data);
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

    //ROLE: ADMIN
    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message, token: data.token };
        } catch (error: any) {
            console.log("AdminOperation Error logging in: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async create(info: CreatingAdminInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("AdminOperation Error create new user: ", error?.response?.data);
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

    //ROLE: ADMIN
    async create(info: CreatingCourseInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("CourseOperation Error create: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async update(info: UpdatingCourseInfo, condition: CourseID, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?course_id=${condition.course_id}`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("CourseOperation Error update: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN
    async delete(condition: CourseID, token: token) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?course_id=${condition.course_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("CourseOperation Error delete: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN, TEACHER, STUDENT
    async findAllCourses(info: UpdatingCourseInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/get`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("CourseOperation Error findAllCourses: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN, TEACHER, STUDENT
    async findClasses(condition: CourseID, token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_classes?course_id=${condition.course_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("CourseOperation Error findClasses: ", error?.response?.data);
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

export interface SubmitFile {
    submitFile: File
}

export interface FileName {
    filename: string
}

export interface DeleteSubmitFileInfo {
    class_id: string,
    filename: string
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

    //ROLE: ADMIN
    async create(info: CreateClassInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error create: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: ADMIN, TEACHER, STUDENT
    async getClassInfo(info: ClassID, token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get?class_id=${info.class_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error create: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }


    //ROLE: TEACHER, STUDENT
    async register(info: RegisterClassInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/register`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error register: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }
    
    //ROLE: TEACHER
    async updateScore(info: UpdateScoreInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/update_score`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error updateScore: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER, STUDENT
    async cancelRegister(info: RegisterClassInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/cancel_register`, info, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error cancelRegister: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async submitFile(info: SubmitFile, condition: ClassID, token: token) {
        try {
            const formData = new FormData();
			formData.append('submitFile', info.submitFile);
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/submit_file?class_id=${condition.class_id}`, formData, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error submitFile: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: STUDENT
    async deleteSubmitFile(info: DeleteSubmitFileInfo, token: token) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete_file?class_id=${info.class_id}&filename=${info.filename}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error deleteSubmitFile: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER, STUDENT
    async showSubmitFile(info: ClassID, token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/show_files?class_id=${info.class_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error showSubmitFile: ", error?.response?.data);
            console.error("Request that caused the error: ", error?.request);
            return { error: error?.response?.data, request: error?.request, status: error.response ? error.response.status : null };
        }
    }

    //ROLE: TEACHER, STUDENT
    async getSubmitFile(info: ClassID, token: token) {
        try {
            const response = await axios.get(`${this.baseUrl}/get_files?class_id=${info.class_id}`, {
                responseType: 'blob', // Set response type to blob for binary data (ZIP file)
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });

            // Trigger file download using the received blob (ZIP file)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${info.class_id}_files.zip`);
            document.body.appendChild(link);
            link.click();
            link.remove();

            return { success: true };
        } catch (error) {
            console.error('Error downloading files:', error);
            return { success: false, error: 'Error downloading files' };
        }
    }

    async getScoreForTeacher(info: ClassID, token: token) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_score?class_id=${info.class_id}`, {
                withCredentials: true,
                headers: {
                    Authorization: token.token
                }
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("ClassOperation Error showSubmitFile: ", error?.response?.data);
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