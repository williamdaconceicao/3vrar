import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // SPHERE
  const sphereSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  sphereSurface.setAngle(Math.PI / 7, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Sphere' }),
    sphereSurface,
  );

  // 3D SPHERE
  r360.renderToLocation(
    r360.createRoot('Sphere'),
    r360.getDefaultLocation(),
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};