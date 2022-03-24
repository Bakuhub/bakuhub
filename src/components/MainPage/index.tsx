import {Button, Grid, TextField, Typography} from "@mui/material";
import PremiseOverview from "../Premise/PremiseOverview";
import CustomizedTimeline from "../Timeline";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {Premise} from "../../../prisma/generated/type-graphql";
import {premisesQuery} from "../../gql/query/premisesQuery";
import {useEffect} from "react";
import {signIn} from "next-auth/react";
import {UserStatus} from "../Auth";

export const MainPage = () => {
    const router = useRouter();
    const {loading, error, data} = useQuery<{ premises: Premise[] }>(premisesQuery, {
        variables: {
            take: 1
        }
    });
    useEffect(() => {
        console.info(new Date());
    }, [data]);
    return <Grid container spacing={1} justifyContent={"center"}>
        <Grid item container justifyContent={"center"} xs={12}>
            <Typography variant={"h6"} onClick={() => signIn()}>
                Bakuhub
            </Typography>
            <UserStatus/>
            <Button variant={"outlined"} onClick={() => router.push("/create/premise")}>
                Create Premise
            </Button>
            <Button onClick={() => {
                fetch("/api/test").then(
                        res => {
                            console.info("---------------------------------------fdis0-fids");
                            console.info(res.json());
                        }
                );
            }}>
                test
            </Button>
        </Grid>
        <Grid>
            <Typography>
                reduce misinformation
            </Typography>
            <Typography>
                when you talk to another person, communication, interface or a area where both of us have to
                understand a common vocabulary </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
            <TextField id="outlined-basic" label="Search" variant="outlined"/>
        </Grid>
        <Grid item xs={4}>
            <CustomizedTimeline/>
        </Grid>
        {
            data?.premises.map(
                    premise => <Grid key={premise.id} item xs={3}
                    ><PremiseOverview premise={premise}/></Grid>
            )

        }
    </Grid>;
};