import ClientComponents from "@/components/admin/ClientComponents"
import ClientTable from "@/components/admin/ClientTable"
export default function ClientPage(){
    return(
        <section className="p-8 space-y-8">
            <ClientComponents/>
            <ClientTable/>
        </section>
    )
}