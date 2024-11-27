import { http } from "../http";

// Project API
export const getProjects = (params: {
  searchItem?: string;
  propertytype?: string[];
  location?: string[];
  rooms?: number[];
  sortBy?: string;
  currentPage?: number;
  itemsPerPage?: number;
}) => {
  return http.get("/projects", { params });
};


export const getRecentProjects = () => {
  return http.get("/projects");
}

export const authLogin = (data: any) => {
  return http.post("/auth/login", data);
};

// Email form API
export const emailForm = (data: any) => {
  return http.post("/leads", data);
};

// User Profile API
export const getUserProfile = (id: string) => {
  return http.get(`/users/profile/${id}`);
};

export const getProject = (projectId: string) => {
  return http.get(`/projects/${projectId}`);
};

// Create Project API
export const createProject = (data: FormData) => {
  return http.post("/projects", data);
};

// Update Project API
export const updateProject = (projectId: string, data: FormData) => {
  return http.put(`/projects/${projectId}`, data);
};

// Delete Project API
export const deleteProject = (projectId: string) => {
  return http.delete(`/projects/${projectId}`);
};

// Add Review API
export const addReview = (projectId: string, data: any) => {
  return http.patch(`/projects/${projectId}/reviews`, data);
};


// Create Project API
export const AddchannelPartner= (data: any) => {
  return http.post("/channelpartners", data);
};



export const FileUpload = (folderName: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file); // Append the file to FormData
  return http.post(`/bunny/upload/${folderName}`, formData);
};


export const AddLead = (data: any) => {
  return http.post("/leads", data);
};


export const NearbyProjects = (projectId: string) => {
  return http.get(`/projects/${projectId}/nearbyprojects`);
};


export const AddReview = (projectId: string, data: any) => {
  return http.post(`/projects/${projectId}/reviews`, data);
}