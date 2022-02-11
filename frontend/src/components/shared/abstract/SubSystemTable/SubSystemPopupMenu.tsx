import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { SubSystem } from "core/dist";
import { useEffect, useRef } from "react";

interface SubSystemPopupMenuEntry<SubSystemType extends SubSystem> {
    label: string,
    onClick(selectedSubSystem: SubSystemType): void,
}

interface SubSystemPopupMenuProps<SubSystemType extends SubSystem> {
    selectedSubSystem: SubSystemType | null,
    anchorEl: HTMLButtonElement | null,
    menuEntries: SubSystemPopupMenuEntry<SubSystemType>[],
    setSelectedSubSystem(selectedSubSystem: SubSystemType | null): void,

}

function SubSystemPopupMenu<SubSystemType extends SubSystem>({
    selectedSubSystem,
    anchorEl,
    menuEntries,
    setSelectedSubSystem,
}: SubSystemPopupMenuProps<SubSystemType>) {

    const handleClose = () => {
        setSelectedSubSystem(null);
    };

    const handleClick = (onClick: (selectedSubSystem: SubSystemType) => void) => {
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
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === "bottom-start" ? "left top" : "left bottom",
                    }}
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
                </Grow>
            )}
        </Popper>
    )
}

export default SubSystemPopupMenu;