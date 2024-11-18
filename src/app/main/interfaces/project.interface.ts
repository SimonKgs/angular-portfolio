export enum Technology {
    Java = 'Java',
    TypeScript = 'TypeScript',
    JavaScript = 'JavaScript',
    NodeJS = 'NodeJS',
    React = 'React',
    Angular = 'Angular',
    Express = 'Express',
    HTML = 'HTML',
    CSS = 'CSS',
    MySQL = 'MySQL',
    MongoDB = 'MongoDB',
    Python = 'Python',
    Flask = 'Flask',
    Django = 'Django',
    NextJS = 'NextJS'
}



export interface ProjectInterface {
    title:             string;
    technologies:      Technology[];
    description:       string;
    startDate:         Date;
    endDate?:          Date;
    image:             string;
    url?:              ProjectURL;
    liveUrl?:           string;
}

export interface ProjectURL {
    frontend?: string;
    backend?:  string;
}
