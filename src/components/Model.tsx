import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

import Model3d from "../assets/3d/3d_printable_radial_pneumatic_engine.glb";

const Model = (props: unknown) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Model3d);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Take 001"]?.play) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return (
    <a.group ref={group} {...props}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group
            name="db0c70578e5840fd93f266aa058e6c3dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group
                  name="Radial_Engine"
                  position={[0, -15.84, 0]}
                  rotation={[0, 0, Math.PI]}
                >
                  <a.group name="Parts_Center">
                    <a.group name="CYLINDER_FULL_MED_geom_set">
                      <a.group name="CYLINDER_FULL_MED">
                        <a.group name="transform1">
                          <a.group name="polySurface1" position={[0, 1.7, 0]}>
                            <mesh
                              name="polySurface1_Radial_Engine_To_Skfb_Orange_Mat_0"
                              geometry={
                                nodes
                                  .polySurface1_Radial_Engine_To_Skfb_Orange_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Orange_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface2"
                            position={[-0.88, -3.7, 0]}
                          >
                            <mesh
                              name="polySurface2_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface2_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface3"
                            position={[-3.87, 3.2, 0]}
                          >
                            <mesh
                              name="polySurface3_Radial_Engine_To_Skfb_Orange_Mat_0"
                              geometry={
                                nodes
                                  .polySurface3_Radial_Engine_To_Skfb_Orange_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Orange_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface9"
                            position={[-2.202, -29.101, -3.154]}
                          >
                            <mesh
                              name="polySurface9_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface9_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface10"
                            position={[0, -36.2, 0]}
                          >
                            <mesh
                              name="polySurface10_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface10_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface11"
                            position={[-14.443, -39.15, 0]}
                          >
                            <mesh
                              name="polySurface11_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface11_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface12"
                            position={[7.5, -39.2, -12.99]}
                          >
                            <mesh
                              name="polySurface12_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface12_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface13"
                            position={[-3.099, -18.7, -1.2]}
                          >
                            <mesh
                              name="polySurface13_Radial_Engine_To_Skfb_Grey_Mat_0"
                              geometry={
                                nodes
                                  .polySurface13_Radial_Engine_To_Skfb_Grey_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Grey_Mat
                              }
                            />
                          </a.group>
                          <a.group name="polySurface14" position={[0, -4.4, 0]}>
                            <mesh
                              name="polySurface14_Radial_Engine_To_Skfb_Bolt_Mat_0"
                              geometry={
                                nodes
                                  .polySurface14_Radial_Engine_To_Skfb_Bolt_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Bolt_Mat
                              }
                            />
                          </a.group>
                          <a.group
                            name="polySurface15"
                            position={[0, -31.8, 0]}
                          >
                            <mesh
                              name="polySurface15_Radial_Engine_To_Skfb_Bolt_Mat_0"
                              geometry={
                                nodes
                                  .polySurface15_Radial_Engine_To_Skfb_Bolt_Mat_0
                                  .geometry
                              }
                              material={
                                materials.Radial_Engine_To_Skfb_Bolt_Mat
                              }
                            />
                          </a.group>
                        </a.group>
                      </a.group>
                    </a.group>
                    <a.group name="Bolts_BKP1">
                      <a.group
                        name="Bolt"
                        position={[-14.768, -35.356, -0.097]}
                      >
                        <mesh
                          name="Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut" position={[-14.472, -34.7, -0.023]}>
                        <mesh
                          name="Nut_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Nut_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                    </a.group>
                    <a.group name="Bolts_BKP2">
                      <a.group
                        name="Bolt_1"
                        position={[7.18, -31.995, -13.136]}
                      >
                        <mesh
                          name="Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Nut_1"
                        position={[7.476, -34.668, -13.062]}
                      >
                        <mesh
                          name="Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                    </a.group>
                  </a.group>
                  <a.group name="Cylinder_1">
                    <a.group name="Plate" position={[17, -16.2, 0]}>
                      <mesh
                        name="Plate_Radial_Engine_To_Skfb_Grey_Mat_0"
                        geometry={
                          nodes.Plate_Radial_Engine_To_Skfb_Grey_Mat_0.geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Grey_Mat}
                      />
                    </a.group>
                    <a.group name="Ring" position={[18, -17.9, -0.004]}>
                      <mesh
                        name="Ring_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Ring_Radial_Engine_To_Skfb_Orange_Mat_0.geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Bolts">
                      <a.group
                        name="Nut_2"
                        position={[6.598, -2.405, -11.433]}
                        rotation={[0, 0.517, 0]}
                      >
                        <mesh
                          name="Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt_2"
                        position={[6.893, -5.014, -11.507]}
                      >
                        <mesh
                          name="Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut1" position={[12.531, -3.4, 7.815]}>
                        <mesh
                          name="Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Bolt1" position={[12.26, -3.695, 7.741]}>
                        <mesh
                          name="Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut2" position={[12.531, -3.4, -7.874]}>
                        <mesh
                          name="Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Bolt2" position={[12.26, -3.695, -7.948]}>
                        <mesh
                          name="Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut3" position={[12.531, -28.2, 12.795]}>
                        <mesh
                          name="Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Bolt3" position={[12.26, -28.495, 12.72]}>
                        <mesh
                          name="Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt4"
                        position={[12.26, -28.495, -13.108]}
                      >
                        <mesh
                          name="Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut4" position={[12.531, -28.2, -13.034]}>
                        <mesh
                          name="Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0"
                          geometry={
                            nodes.Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0.geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                    </a.group>
                    <a.group name="Lid1" position={[18, -31.564, -13.381]}>
                      <mesh
                        name="Lid1_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Lid1_Radial_Engine_To_Skfb_Orange_Mat_0.geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                  </a.group>
                  <a.group name="Piston_1">
                    <a.group name="Piston" position={[1.051, -19.9, 0]}>
                      <mesh
                        name="Piston_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Piston_Radial_Engine_To_Skfb_Orange_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Washer_1" position={[9.7, -17.9, 0]}>
                      <mesh
                        name="Washer_1_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Washer_1_Radial_Engine_To_Skfb_Orange_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Washer_2" position={[10.7, -17.9, 0]}>
                      <mesh
                        name="Washer_2_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Washer_2_Radial_Engine_To_Skfb_Orange_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="GloveFinger" position={[14.31, -17.9, 0]}>
                      <mesh
                        name="GloveFinger_Radial_Engine_To_Skfb_Glove_Mat_0"
                        geometry={
                          nodes.GloveFinger_Radial_Engine_To_Skfb_Glove_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Glove_Mat}
                      />
                    </a.group>
                    <a.group
                      name="GloveFinger_NoRing"
                      position={[14.31, -17.9, 0]}
                    >
                      <mesh
                        name="GloveFinger_NoRing_Radial_Engine_To_Skfb_Glove_Mat_0"
                        geometry={
                          nodes
                            .GloveFinger_NoRing_Radial_Engine_To_Skfb_Glove_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Glove_Mat}
                      />
                    </a.group>
                  </a.group>
                  <a.group
                    name="Piston_2"
                    position={[-8.169, -1.48, -6.869]}
                    rotation={[-Math.PI, 1.353, -Math.PI]}
                  >
                    <a.group name="polySurface4" position={[1.051, -19.9, 0]}>
                      <mesh
                        name="polySurface4_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.polySurface4_Radial_Engine_To_Skfb_Orange_Mat_0
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                  </a.group>
                  <a.group
                    name="Piston_3"
                    position={[-8.149, 1.573, 7.018]}
                    rotation={[-Math.PI, -1.385, -Math.PI]}
                  >
                    <a.group name="polySurface4_1" position={[1.051, -19.9, 0]}>
                      <mesh
                        name="polySurface4_Radial_Engine_To_Skfb_Orange_Mat_0_1"
                        geometry={
                          nodes
                            .polySurface4_Radial_Engine_To_Skfb_Orange_Mat_0_1
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                  </a.group>
                  <a.group
                    name="Cylinder_2"
                    rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
                  >
                    <a.group name="Lid" position={[23.3, -16.2, 0]}>
                      <mesh
                        name="Lid_Radial_Engine_To_Skfb_Orange_Mat_0"
                        geometry={
                          nodes.Lid_Radial_Engine_To_Skfb_Orange_Mat_0.geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Plate_1" position={[17, -16.2, 0]}>
                      <mesh
                        name="Plate_Radial_Engine_To_Skfb_Grey_Mat_0_1"
                        geometry={
                          nodes.Plate_Radial_Engine_To_Skfb_Grey_Mat_0_1
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Grey_Mat}
                      />
                    </a.group>
                    <a.group name="Ring_1" position={[18, -17.9, -0.004]}>
                      <mesh
                        name="Ring_Radial_Engine_To_Skfb_Orange_Mat_0_1"
                        geometry={
                          nodes.Ring_Radial_Engine_To_Skfb_Orange_Mat_0_1
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Bolts_1">
                      <a.group
                        name="Nut_3"
                        position={[6.598, -2.405, -11.433]}
                        rotation={[0, 0.517, 0]}
                      >
                        <mesh
                          name="Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_3"
                          geometry={
                            nodes.Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_3
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt_3"
                        position={[6.893, -5.014, -11.507]}
                      >
                        <mesh
                          name="Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_3"
                          geometry={
                            nodes.Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_3
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut1_1" position={[12.531, -3.4, 7.815]}>
                        <mesh
                          name="Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Bolt1_1" position={[12.26, -3.695, 7.741]}>
                        <mesh
                          name="Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut2_1" position={[12.531, -3.4, -7.874]}>
                        <mesh
                          name="Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt2_1"
                        position={[12.26, -3.695, -7.948]}
                      >
                        <mesh
                          name="Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut3_1" position={[12.531, -28.2, 12.795]}>
                        <mesh
                          name="Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt3_1"
                        position={[12.26, -28.495, 12.72]}
                      >
                        <mesh
                          name="Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt4_1"
                        position={[12.26, -28.495, -13.108]}
                      >
                        <mesh
                          name="Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Nut4_1"
                        position={[12.531, -28.2, -13.034]}
                      >
                        <mesh
                          name="Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0_1"
                          geometry={
                            nodes.Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0_1
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                    </a.group>
                  </a.group>
                  <a.group
                    name="Cylinder_3"
                    rotation={[-Math.PI, -Math.PI / 3, -Math.PI]}
                  >
                    <a.group name="Lid_1" position={[23.3, -16.2, 0]}>
                      <mesh
                        name="Lid_Radial_Engine_To_Skfb_Orange_Mat_0_1"
                        geometry={
                          nodes.Lid_Radial_Engine_To_Skfb_Orange_Mat_0_1
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Plate_2" position={[17, -16.2, 0]}>
                      <mesh
                        name="Plate_Radial_Engine_To_Skfb_Grey_Mat_0_2"
                        geometry={
                          nodes.Plate_Radial_Engine_To_Skfb_Grey_Mat_0_2
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Grey_Mat}
                      />
                    </a.group>
                    <a.group name="Ring_2" position={[18, -17.9, -0.004]}>
                      <mesh
                        name="Ring_Radial_Engine_To_Skfb_Orange_Mat_0_2"
                        geometry={
                          nodes.Ring_Radial_Engine_To_Skfb_Orange_Mat_0_2
                            .geometry
                        }
                        material={materials.Radial_Engine_To_Skfb_Orange_Mat}
                      />
                    </a.group>
                    <a.group name="Bolts_2">
                      <a.group
                        name="Nut_4"
                        position={[6.598, -2.405, -11.433]}
                        rotation={[0, 0.517, 0]}
                      >
                        <mesh
                          name="Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_4"
                          geometry={
                            nodes.Nut_Radial_Engine_To_Skfb_Bolt_Mat_0_4
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt_4"
                        position={[6.893, -5.014, -11.507]}
                      >
                        <mesh
                          name="Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_4"
                          geometry={
                            nodes.Bolt_Radial_Engine_To_Skfb_Bolt_Mat_0_4
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut1_2" position={[12.531, -3.4, 7.815]}>
                        <mesh
                          name="Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Nut1_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Bolt1_2" position={[12.26, -3.695, 7.741]}>
                        <mesh
                          name="Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Bolt1_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut2_2" position={[12.531, -3.4, -7.874]}>
                        <mesh
                          name="Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Nut2_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt2_2"
                        position={[12.26, -3.695, -7.948]}
                      >
                        <mesh
                          name="Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Bolt2_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group name="Nut3_2" position={[12.531, -28.2, 12.795]}>
                        <mesh
                          name="Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Nut3_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt3_2"
                        position={[12.26, -28.495, 12.72]}
                      >
                        <mesh
                          name="Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Bolt3_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Bolt4_2"
                        position={[12.26, -28.495, -13.108]}
                      >
                        <mesh
                          name="Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Bolt4_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                      <a.group
                        name="Nut4_2"
                        position={[12.531, -28.2, -13.034]}
                      >
                        <mesh
                          name="Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0_2"
                          geometry={
                            nodes.Nut4_Radial_Engine_To_Skfb_Bolt_Mat_0_2
                              .geometry
                          }
                          material={materials.Radial_Engine_To_Skfb_Bolt_Mat}
                        />
                      </a.group>
                    </a.group>
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
};

const ModelCanvas = () => {
  const adjustModelForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = 0.04;
      screenPosition = [0, 0, 0];
    } else {
      screenScale = 0.044;
      screenPosition = [0, 0, 0];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustModelForScreenSize();

  return (
    <Canvas style={{ width: 900, height: 800 }}>
      <OrbitControls />
      <OrthographicCamera />
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <directionalLight position={[1, 1, 10]} intensity={2} />
      <directionalLight position={[0, 0, 1]} intensity={1} />
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor="#b1e1ff"
        groundColor={"#000000"}
        intensity={1}
      />
      <Model position={position} scale={scale} />
      <directionalLight position={position} intensity={1} />
    </Canvas>
  );
};

export default ModelCanvas;
