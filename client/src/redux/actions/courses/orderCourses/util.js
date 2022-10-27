export let set_filter_type = (types, type_condition_selected) => {
    for (let i = 0; i < types.length; i++) {
        if (types[i] !== type_condition_selected) continue
        else return types[i];
    }
};