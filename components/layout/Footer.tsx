import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-20 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                <div className="col-span-2 lg:col-span-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        LUXURY TECH.
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground w-full max-w-xs">
                        Designing the future of interaction. Premium hardware meets visionary software.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-sm">Product</h4>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Overview</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Specs</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Pricing</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-sm">Company</h4>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">About</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Careers</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Contact</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-sm">Legal</h4>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Privacy</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-black dark:hover:text-white">Terms</Link>
                </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground border-t border-gray-100 dark:border-white/5 pt-8">
                <p>&copy; 2024 Luxury Tech Inc. All rights reserved.</p>
                <div className="flex gap-4">
                    {/* Socials placeholders */}
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </footer>
    );
}
