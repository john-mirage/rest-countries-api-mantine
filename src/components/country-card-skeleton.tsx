import { Card, Skeleton } from "@mantine/core";

function CountryCardSkeleton() {
    return (
        <Card>
            <Card.Section>
                <Skeleton height={180} />
            </Card.Section>
        </Card>
    );
}

export default CountryCardSkeleton;