export type TApplication = {
    _id:string,
    company: string,
    jobTitle: string,
    requirements: string,
    reply: string,
    notes: [{
        title: string,
        note: string
    }],
    expiry: string,
    applicationLink: string,
    interviewDate: string,
    reminders: [{
        date: string,
        title: string,
        description: string
    }],
    coverLetter: string,
}

export type TNote = {
    _id:string,
    title:string,
    note:string
}