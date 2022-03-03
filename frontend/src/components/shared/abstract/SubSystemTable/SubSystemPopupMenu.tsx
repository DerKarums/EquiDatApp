import { ClickAwayListener, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useEffect, useRef } from "react";
import { SubSystemOverviewModel } from "../../../../types/types";

interface SubSystemPopupMenuEntry<SubSystemOverviewModelType extends SubSystemOverviewModel> {
    label: string,
    onClick(selectedSubSystem: SubSystemOverviewModelType): void,
}

interface SubSystemPopupMenuProps<SubSystemOverviewModelType extends SubSystemOverviewModel> {
    selectedSubSystem: SubSystemOverviewModelType | null,
    anchorEl: HTMLButtonElement | null,
    menuEntries: SubSystemPopupMenuEntry<SubSystemOverviewModelType>[],
    setSelectedSubSystem(selectedSubSystem: SubSystemOverviewModelType | null): void,

}

function SubSystemPopupMenu<SubSystemOverviewModelType extends SubSystemOverviewModel>({
    selectedSubSystem,
    anchorEl,
    menuEntries,
    setSelectedSubSystem,
}: SubSystemPopupMenuProps<SubSystemOverviewModelType>) {

    const handleClose = () => {
        setSelectedSubSystem(null);
    };

    const handleClick = (onClick: (selectedSubSystem: SubSystemOverviewModelType) => void) => {
        handleClose();
        onClick(selectedSubSystem!);
    }

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
            event.preventDefault();
            handleClose();
        } else if (event.key === "Escape") {
            handleClose();
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(selectedSubSystem !== null);
    useEffect(() => {
        if (prevOpen.current === true && selectedSubSystem === null) {
            anchorEl?.focus();
        }

        prevOpen.current = selectedSubSystem !== null;
    }, [anchorEl, selectedSubSystem]);


    return (
        <Popper
            open={selectedSubSystem !== null}
            anchorEl={anchorEl}
            role={undefined}
            placement="bottom-start"
            disablePortal
        >
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                        autoFocusItem={selectedSubSystem !== null}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                    >
                        {menuEntries.map((menuEntry, index) => (
                            <MenuItem key={index} onClick={() => handleClick(menuEntry.onClick)}>
                                {menuEntry.label}
                            </MenuItem>
                        ))}
                    </MenuList>
                </ClickAwayListener>
            </Paper>

        </Popper>
    )
}

export default SubSystemPopupMenu;