import {z} from 'zod'

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