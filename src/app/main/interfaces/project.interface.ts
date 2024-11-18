export type Technology = 
'Java' 
| 'TypeScript' 
| 'JavaScript' 
| 'NodeJS' 
| 'React' 
| 'Angular' 
| 'Express'
| 'HTML'
| 'CSS'
| 'MySQL'
| 'MongoDB'
| 'Python'
| 'Flask'
| 'Django'
| 'NextJS'
;


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
