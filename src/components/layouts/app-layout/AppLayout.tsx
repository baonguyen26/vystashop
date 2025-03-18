import Footer from "../components/footer"
import Header from "../components/header"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-start items-center">
            <Header />
            <main className="w-[100%] flex flex-col justify-start items-center max-w-[1440px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;