import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectAPI";
import EditprojectForm from "@/components/projects/EditprojectForm";

const EditProjectView = () => {
  const params = useParams();

  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });

  if (isLoading) return "Cargando..."
  if (isError) return <Navigate to="/404" />
  if (data) return <EditprojectForm data={data} projectId={projectId} />

};

export default EditProjectView;
