import { Client,Databases } from "appwrite";

const ProjectID= import.meta.env.VITE_APPWRITE_PROJECT_ID;

const DatabaseID= import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CollectionID= import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client= new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(ProjectID)



const databases= new Databases(client)


export async function passMovie(){
    try{
        const response= await databases.listDocuments(DatabaseID,CollectionID)
        const data= response.documents
        console.log(data)
    }catch(err){
        console.log('Error occured at backend!')
    }
}
