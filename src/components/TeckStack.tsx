import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function TechStack() {


    function calculateTime() {
        const date = new Date()
        return date.getFullYear() - 2023
    }

    return(
        <div className="space-y-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base font-bold">Kotlin & Java</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="mt-2 text-sm text-muted-foreground">Been coding for {calculateTime()} years</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base font-bold">Senior Frontend Developer</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-sm text-muted-foreground">Acme Corp</p>
                <p className="mt-2 text-sm">Built accessible component systems using React, TypeScript, and Tailwind CSS.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default TechStack