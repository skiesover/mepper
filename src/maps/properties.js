export function resizeMap(regions) {
    for (var region of regions) {
        region.scale(0.8, 0.8, [1], [1]);
        region.rotate(-5, [1], [1]);
    }
}