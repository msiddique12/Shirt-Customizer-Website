import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FB9E46',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;