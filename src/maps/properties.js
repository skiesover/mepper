export function resizeMap(regions) {
    for (var region of regions) {
        region.scale(0.6, 0.6, [1], [1]);
        region.rotate(-4, [1], [1]);
    }
}