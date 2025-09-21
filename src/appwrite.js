import { Client,Databases,ID,Query } from "appwrite";

const ProjectID= import.meta.env.VITE_APPWRITE_PROJECT_ID;

const DatabaseID= import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CollectionID= import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client= new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(ProjectID)

const databases= new Databases(client)

let topFives;

export async function passMovie(MovieName,Movie){

    if(MovieName == '' || MovieName == ' ' || Movie.length === 0) return

    try{  
        
        const resp = await databases.listDocuments(
            DatabaseID,
            CollectionID,
            [
                Query.equal("searchedMovieName",MovieName)
            ]
        )
        
        if(resp.documents.length === 0){

            const response= await databases.createDocument(
                DatabaseID,
                CollectionID,
                ID.unique(),
                {
                    searchedMovieName:MovieName,posterURL:Movie.poster_path,searchedCount:1
                }
            )

            return response.documents

        }else{
            const doc=resp.documents[0]
            
            const response = await databases.updateDocument(
                DatabaseID,
                CollectionID,
                doc.$id,
                {
                 searchedMovieName:MovieName,posterURL:Movie.poster_path,searchedCount:doc.searchedCount+1
                }
            )

            return response.databases
        }
         

    }catch(err){
        console.log(err)
    }finally{
        console.log('Api called')
    }

}


// Function that find 5 top films searched by users
export async function findTopFiveMovies(){
    try{
        const response= await databases.listDocuments(
            DatabaseID,
            CollectionID
        )

        const data=response.documents
         
        data.sort((a,b)=>{
            return b.searchedCount - a.searchedCount
        }) 

        topFives = data.slice(0,5)

        console.log(topFives)
    }catch(err){
        console.log(err)
    }finally{
        console.log('5 top movies found')
    }
}


