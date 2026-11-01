import getCurrentYear from "./date"

export default function Footer () {
    return(
        <footer className="bg-gray-800 text-white py-4 mt-12">
            <div className="container mx-auto text-center">
                <p>Copyright &copy; {getCurrentYear()} | Samuel Dias Costa | All rights reserved</p>
            </div>
        </footer>
    )
}