import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {Search, SearchIconWrapper, StyledInputBase} from "./SearchBar.styled";
import {useRouter} from "next/router";


export const SearchBar = () => {
    const [value, setValue] = React.useState("");
    const router = useRouter();
    const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>
            = (event) => {
        if (event.code === "Enter") {
            router.push(`/results?keyword=${Buffer.from(value).toString("base64")}`);
        }
    };
    return (
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        onKeyDown={handleKeyDown}
                        placeholder="Search…"
                        inputProps={{"aria-label": "search"}}
                />
            </Search>
    );
};
