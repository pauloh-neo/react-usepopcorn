
export function Footer(){
    return(
        <div className="grid grid-cols-3 justify-items-center border-t-2 bg-gray-100 border-gray-200 p-8 mt-3">
            <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-semibold text-gray-900">Social Media</h3>
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#">
                            <ion-icon size="large" name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-semibold text-gray-900">About</h3>
                <a href="#">Contact Us</a>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-semibold text-gray-900">Legal</h3>
                <div className="flex flex-col gap-2">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}