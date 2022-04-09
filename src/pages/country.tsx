import CountryView from "@components/country-view";
import CountryViewSkeleton from "@components/country-view-skeleton";
import UseCountry from "@hooks/use-country";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";

function Country() {
    const params = useParams();
    const { country, isLoading, isError} = UseCountry(params.code || "");

    if (isLoading && isEmpty(country)) {
        return <CountryViewSkeleton />
    }

    return <CountryView />;
}

export default Country;