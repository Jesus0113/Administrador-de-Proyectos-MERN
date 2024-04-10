import {z} from 'zod'



/*Tasks*/

// type TaskStatus = "pending" | "onHold" | "inProgress" | "underReview" | "completed"

export const taskStatusShema = z.enum(["pending" , "onHold" , "inProgress" , "underReview" , "completed"])

export const taskShema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: taskStatusShema,
    createAt: z.string(),
    updatedAt: z.string()
})

export type Task = z.infer<typeof taskShema>
export type TaskFormData = Pick<Task, 'name' | 'description'>


/* Projects */
export const projectShema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
    

})

export const dashboardProjectSchema = z.array(
    projectShema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true

    })
)

export type Project = z.infer<typeof projectShema>
export type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>