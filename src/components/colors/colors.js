let colors = {
    "light" : {
        "primary": "#6B9080",
        "secondary": "#EAF4F4"
    },
    "dark" : {
        "primary": "#355070",
        "secondary": "#B56576"
    }
}

export let getColorsObject = (mode, type, element) => {
    if (colors[mode]){
        switch (element) {
            case "background":
                console.log("background")
                return { "background" : colors[mode][type] }
        
            default:
                console.log("color")
                return { "color" : colors[mode][type] }
        }
    } else {
        return { "background" : colors["dark"][type] }
    }

    
}

export let getColors = (mode, type, element) => {
    if (colors[mode]){
        switch (element) {
            case "background":
                console.log("background")
                return colors[mode][type]
        
            default:
                console.log("color")
                return colors[mode][type]
        }
    } else {
        return { "background" : colors["dark"][type] }
    }
}

