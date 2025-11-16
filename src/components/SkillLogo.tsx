function SkillLogo({skillInitials}:{skillInitials: string}) {
    return (<div className="mr-2 rounded-full flex shrink-0 items-center justify-center bg-purple-200 w-8 h-8">
        <span className="text-sm font-bold">{skillInitials}</span>
    </div>)
}


export default SkillLogo;