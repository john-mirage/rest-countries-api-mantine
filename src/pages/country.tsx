import CountryView from "@components/country-view";
import CountryViewSkeleton from "@components/country-view-skeleton";
import ArrowIcon from "@components/icons/arrow-icon";
import UseCountry from "@hooks/use-country";
import { Button } from "@mantine/core";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Country() {
    const params = useParams();
    const [{ country, isLoading, isError}, setCountryCode] = UseCountry(params.code || "");
    
    useEffect(() => {
        setCountryCode(params.code);
    }, [params.code]);

    if (isLoading || isEmpty(country)) {
        return <CountryViewSkeleton />
    }

    return (
        <>
            <Link to="/">
                <Button color="gray" leftIcon={<ArrowIcon />}>Back</Button>
            </Link>
            <CountryView country={country} />
        </>
    );
}

export default Country;