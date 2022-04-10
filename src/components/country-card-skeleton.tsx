import { Card, Skeleton } from "@mantine/core";

function CountryCardSkeleton() {
    return (
        <Card>
            <Card.Section mb={16}>
                <Skeleton height={180}/>
            </Card.Section>
            <Skeleton radius="lg" mb={16} height={26} />
            <Skeleton radius="lg" mb={8} height={25} />
            <Skeleton radius="lg" mb={8} height={25} />
            <Skeleton radius="lg" height={25} />
        </Card>
    );
}

export default CountryCardSkeleton;