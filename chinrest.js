// two blindspot estimates
// measure px2mm, px2deg, viewing distance 
// resize to cm (50 pixels per unit)
// note: you may still choose to estimate viewing distance even if resizing to cm or inches
let cm_resize = {
type: 'virtual-chinrest',
blindspot_reps: 5, 
resize_units: "cm",
pixels_per_unit: 50
};

// one blindspot estimate
// measure px2mm, viewing distance and px2deg
// resize to degrees of visual angle (50 pixels per unit)
// don't report viewing distance to subject
let deg_resize = {
type: 'virtual-chinrest',
blindspot_reps: 1,
resize_units: "deg",
pixels_per_unit: 50,
viewing_distance_report: 'none'
};

// one blindspot estimate
// estimate viewing distance but do not resize
// note: pixels_per_unit will be ignored
let no_resize = {
type: 'virtual-chinrest',
blindspot_reps: 1,
resize_units: "none",
pixels_per_unit: 50 
};

// resizing to degrees with no blindspot measurment (blindspot_reps: 0) is not possible
// this trial will throw an error
let error_trial = {
type: 'virtual-chinrest',
blindspot_reps: 0, 
resize_units: "deg",
pixels_per_unit: 50
}

let validation_trial = {
type: 'html-keyboard-response',
stimulus: '<div style="margin: auto; width: 200px; height: 200px; background-color: black;"></div>',
prompt: '<p>The stimulus above should be 4cm x 4cm if resizing worked properly.</p>'
}