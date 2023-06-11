import { useEffect, useState } from "react";
import { SendGet } from "../../Hooks/useFetch";
import JobCard from "./Cards/JobCard";
import { TApplication } from "../types";

const Applications = ({archive}:{archive:boolean}) => {
    // Get all applicaitons from server
    const [applications, setApplications] = useState<TApplication[]>([]);

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        RefreshApplications();
    }, []);

    const RefreshApplications = ()=>{
        SendGet("get-applications", {archived:archive}).then(response => {
            setLoading(false);
            setApplications(response.applications);
        });
    }

    return (
        <>
            <div className="mt-[32px]">
                {loading&&<div className="w-full h-full flex items-center justify-center"><p className="text-black-300">Loading... </p><img className="w-[24px] h-[24px] animate-spin" src="loader.svg"/></div>}
                {
                    (applications.length<=0 && !loading) &&
                    <div className="text-center">
                        <h1 className="text-black-300 text-[24px]">You don't have any applications</h1>
                    </div>
                }
                <div className="flex gap-[8px] flex-wrap">
                {
                    applications?.map(application => (
                        <JobCard RefreshApplications={RefreshApplications} _id={application._id} company={application.company} jobTitle={application.jobTitle} expiry={application.expiry} requirements={application.requirements} reply={application.reply} applicationLink={application.applicationLink} />
                    ))
                }
                </div>
               
            </div>
        </>
    )
}

export default Applications;