module.exports = function() {
  return {
    '05': {
      video: [
        {
          video: {
            source: 'p5_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '06': {
      video: [
        {
          video: {
            source: 'p6_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '7%'
            }
          }
        }
      ]
    },
    '07': {
      static: [
        {
          image: 'pg7ex3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '48%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p7_v1'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '08': {
      exercise: [
        {
          type: 'picker',
          title: 'WER SPRICHT? HÖR ZU UND KREIS EIN!',
          image: 'pg08ex5',
          audio: {
            source: 'pg8ex5',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'ASCULTA SI INCERCUIESTE PERSONAJUL CARE VORBESTE. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '32.3%',
                left: '35.5%',
                width: '60%',
                height: '15.5%'
              },
              answer: {
                left: '22%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '49.3%',
                left: '35.5%',
                width: '60%',
                height: '15.5%'
              },
              answer: {
                left: '65%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '67.3%',
                left: '35.5%',
                width: '60%',
                height: '15.5%'
              },
              answer: {
                left: '27%'
              }
            }
          ]
        }
      ]
    },
    '09': {
      video: [
        {
          video: {
            source: 'p9_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '41.5%'
            }
          }
        },
        {
          video: {
            source: 'p9_v2'
          },
          trigger: {
            button: {
              top: '58.5%'
            },
            zone: {
              top: '58.5%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10ichsage',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '82%'
            },
            zone: {
              top: '82%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p10_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '18%'
            }
          }
        }
      ]
    },
    '11': {
      exercise: [
        {
          type: 'checker',
          title: 'KREUZE SINNGEMÄSS AN!',
          image: 'pg11ex8',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'PRIVESTE IMAGINILE SI BIFEAZA ENUNTUL CORESPUNZATOR. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '19%',
                left: '17.7%',
                width: '30%',
                height: '8.3%'
              },
              answerFalse: {
                top: '62%',
                left: '68%'
              },
              answerTrue: {
                top: '3%',
                left: '77%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '19%',
                left: '57.7%',
                width: '30%',
                height: '8.3%'
              },
              answerTrue: {
                top: '62%',
                left: '68%'
              },
              answerFalse: {
                top: '3%',
                left: '77%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '58.6%',
                left: '17.7%',
                width: '30%',
                height: '8.3%'
              },
              answerFalse: {
                top: '63%',
                left: '79%'
              },
              answerTrue: {
                top: '6%',
                left: '86%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '58.6%',
                left: '57.7%',
                width: '30%',
                height: '8.3%'
              },
              answerTrue: {
                top: '63%',
                left: '72%'
              },
              answerFalse: {
                top: '6%',
                left: '80%'
              }
            }
          ]
        }
      ]
    },
    '12': {
      static: [
        {
          image: 'pg12ichbin',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '81%'
            },
            zone: {
              top: '81%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p12_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '19%'
            }
          }
        }
      ]
    },
    '13': {
      video: [
        {
          video: {
            source: 'p13-14_v1'
          },
          trigger: {
            button: {
              top: '22%'
            },
            zone: {
              top: '22%',
              bottom: '9%'
            }
          }
        }
      ]
    },
    '14': {
      video: [
        {
          video: {
            source: 'p13-14_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '46%'
            }
          }
        }
      ]
    },
    '15': {
      static: [
        {
          image: 'pg15static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '35%'
            },
            zone: {
              top: '35%',
              bottom: '59%'
            }
          }
        },
        {
          image: 'pg15static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '81%'
            },
            zone: {
              top: '81%',
              bottom: '13%'
            }
          }
        },
        {
          image: 'pg15static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '44%'
            },
            zone: {
              top: '44%',
              bottom: '31%'
            }
          }
        },
        {
          image: 'pg15static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '89%'
            },
            zone: {
              top: '89%',
              bottom: '4%'
            }
          }
        },
        {
          image: 'pg15static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '71%'
            },
            zone: {
              top: '71%',
              bottom: '22%'
            }
          }
        }
      ]
    },
    '16': {
      static: [
        {
          image: 'pg16static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '52%'
            }
          }
        },
        {
          image: 'pg16static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '51%'
            },
            zone: {
              top: '51%',
              bottom: '26%'
            }
          }
        },
        {
          image: 'pg16static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '76%'
            },
            zone: {
              top: '76%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '17': {
      video: [
        {
          video: {
            source: 'p17_v1'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '18': {
      video: [
        {
          video: {
            source: 'p18_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '19': {
     exercise: [
       {
         type: 'linker',
         image: '02',
         title: 'HÖR ZU UND VERBINDE!',
         audio: {
           source: 'pg19ex3',
           state: 'stopped'
         },
         trigger: {
           button: {
             top: '10%'
           },
           zone: {
             top: '10%',
             bottom: '12%'
           }
         },
         help: {
           toggle: false,
           text: 'ASCULTA SI UNESTE OBIECTELE CU GHIOZDANUL CORESPUNZATOR PERSOANEI CARE VORBESTE. Cand ai terminat apasape cheita si verifica. Succes!'
         },
         data: [
           {
             identifier: 'creion',
             style: {
               top: '15%',
               left: '8%',
               width: '10%',
               height: 'auto'
             },
             image: {
               src: '19-creion.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'pix',
             style: {
               top: '12%',
               left: '25%',
               width: '18%',
               height: 'auto'
             },
             image: {
               src: '19-pix.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'creion-ceara',
             style: {
               top: '17%',
               left: '75%',
               width: '17%',
               height: 'auto'
             },
             image: {
               src: '19-creion-ceara.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'penar',
             style: {
               top: '30%',
               left: '22%',
               width: '20%',
               height: 'auto'
             },
             image: {
               src: '19-penar.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'guma-sters',
             style: {
               top: '27%',
               left: '49%',
               width: '19%',
               height: 'auto'
             },
             image: {
               src: '19-guma-sters.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'carte',
             style: {
               top: '10%',
               left: '50%',
               width: '18%',
               height: 'auto'
             },
             image: {
               src: '19-carte.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'nick',
             style: {
               top: '57%',
               left: '60%',
               width: '15%',
               height: 'auto'
             },
             image: {
               src: '19-nick.png'
             },
             solution: ["pix", "guma-sters", "creion-ceara"],
             sourceAnchors: [],
             targetAnchors: ["LeftMiddle"]
           },
           {
             identifier: 'marion',
             style: {
               top: '57%',
               left: '26%',
               width: '16%',
               height: 'auto'
             },
             image: {
               src: '19-marion.png'
             },
             solution: ["creion", "penar", "carte"],
             sourceAnchors: [],
             targetAnchors: ["RightMiddle"]
           }
         ]
       }
     ]
    },
    '20': {
      video: [
        {
          video: {
            source: 'p20_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '21': {
      static: [
        {
          image: 'pg21static2',
          audio: {
            source: 'pg21ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '57%'
            },
            zone: {
              top: '57%',
              bottom: '35%',
              left: '23%',
              width: '21%'
            }
          }
        },
        {
          image: 'pg21static4',
          audio: {
            source: 'pg21ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '28%',
              left: '21%',
              width: '9%'
            }
          }
        },
        {
          image: 'pg21static1',
          audio: {
            source: 'pg21ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '76%'
            },
            zone: {
              top: '66%',
              bottom: '12%',
              left: '30%',
              width: '23%'
            }
          }
        },
        {
          image: 'pg21static3',
          audio: {
            source: 'pg21ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '86%'
            },
            zone: {
              top: '72%',
              bottom: '8%',
              left: '19%',
              width: '10%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p21_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '54%'
            }
          }
        }
      ]
    },
    '22': {
      static: [
        {
          image: 'pg22ex7',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '9%',
            }
          }
        }
      ]
    },
    '23': {
      exercise: [
        {
          type: 'painter',
          title: 'RATE, ZEICHNE UND SAG DIE NAMEN!',
          image: 'pg23ex1',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'GHICESTE CE OBIECTE SUNT ASCUNSE IN PACHET SI DESENEAZA-LE IN CASUTA ALATURATA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.5%',
                left: '59%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg23ex1one'
            },
            {
              identifier: 'two',
              position: {
                top: '51%',
                left: '59%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg23ex1two'
            },
            {
              identifier: 'three',
              position: {
                top: '65.3%',
                left: '59%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg23ex1three'
            },
            {
              identifier: 'four',
              position: {
                top: '79.8%',
                left: '59%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg23ex1four'
            }
          ]
        }
      ]
    },
    '24': {
     exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE UND MAL AUS!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '12%'
            }
          },
          help: {
            toggle: false,
            text: 'UNESTE CUVANTUL CU DESENUL CORESPUNZATOR SI COLOREAZA-L.Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'ghiozdan',
              style: {
                top: '7%',
                left: '12%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-ghiozdan.png'
              },
              solution: 'roz',
              solutionImg: {
                src: '24-ghiozdan-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'creion-de-ceara',
              style: {
                top: '32%',
                left: '12%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-creion-ceara.png'
              },
              solution: 'albastru',
              solutionImg: {
                src: '24-creion-ceara-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'guma-de-sters',
              style: {
                top: '70%',
                left: '12%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-guma-sters.png'
              },
              solution: 'portocaliu',
              solutionImg: {
                src: '24-guma-sters-colorata.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'portocaliu',
              style: {
                top: '14%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#F7A04B'
              },
              image: {
                src: '24-portocaliu.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'roz',
              style: {
                top: '26%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#F49DC4'
              },
              image: {
                src: '24-roz.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'verde',
              style: {
                top: '38%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '24-verde.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'albastru',
              style: {
                top: '50%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#33BCF1'
              },
              image: {
                src: '24-albastru.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'galben',
              style: {
                top: '62%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#FCC641'
              },
              image: {
                src: '24-galben.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'rosu',
              style: {
                top: '74%',
                left: '42%',
                width: '17%',
                height: 'auto',
                color: '#EF445F'
              },
              image: {
                src: '24-rosu.png'
              },
              sourceAnchors: ["LeftMiddle", "RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'creion',
              style: {
                top: '4%',
                left: '74%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-creion.png'
              },
              solution: 'galben',
              solutionImg: {
                src: '24-creion-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'pix',
              style: {
                top: '46%',
                left: '74%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-pix.png'
              },
              solution: 'rosu',
              solutionImg: {
                src: '24-pix-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'penar',
              style: {
                top: '76%',
                left: '74%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '24-penar.png'
              },
              solution: 'verde',
              solutionImg: {
                src: '24-penar-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
       }
     ]
    },
    '25': {
      static: [
        {
          image: 'pg25static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '42%',
            }
          }
        },
        {
          image: 'pg25static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '18%',
            }
          }
        },
        {
          image: 'pg25static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '82%'
            },
            zone: {
              top: '82%',
              bottom: '10%',
            }
          }
        }
      ]
    },
    '26': {
      static: [
        {
          image: 'pg26static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '56%',
            }
          }
        },
        {
          image: 'pg26static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '44%'
            },
            zone: {
              top: '44%',
              bottom: '28%',
            }
          }
        }
      ]
    },
    '27': {
      video: [
        {
          video: {
            source: 'p27_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '28': {
      video: [
        {
          video: {
            source: 'p28_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '29': {
      exercise: [
        {
          type: 'checker',
          title: 'HÖR ZU UND MAL AUS!',
          image: 'pg29ex3',
          audio: {
            source: 'pg29ex3',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'ASCULTA SI COLOREAZA LUMINA SEMAFORULUI VERDE DACA ENUNTUL ESTE CORECT, ROSU DACA ESTE GRESIT SI PORTOCALIU DACA NU STII. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '15%',
                left: '35.7%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '23%',
                left: '29%'
              },
              answerTrue: {
                top: '66%',
                left: '33%'
              },
              answerIndeterminate: {
                top: '45%',
                left: '31%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '15.5%',
                left: '74.5%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '66%',
                left: '33%'
              },
              answerTrue: {
                top: '23%',
                left: '29%'
              },
              answerIndeterminate: {
                top: '45%',
                left: '31%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '39.5%',
                left: '36.7%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '23%',
                left: '29%'
              },
              answerTrue: {
                top: '45%',
                left: '31%'
              },
              answerIndeterminate: {
                top: '66%',
                left: '33%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '39.4%',
                left: '73.9%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '23%',
                left: '29%'
              },
              answerTrue: {
                top: '66%',
                left: '33%'
              },
              answerIndeterminate: {
                top: '45%',
                left: '31%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '63.5%',
                left: '37.1%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '66%',
                left: '33%'
              },
              answerTrue: {
                top: '23%',
                left: '29%'
              },
              answerIndeterminate: {
                top: '45%',
                left: '31%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '62.5%',
                left: '74.5%',
                width: '14%',
                height: '19.3%'
              },
              answerFalse: {
                top: '23%',
                left: '29%'
              },
              answerTrue: {
                top: '66%',
                left: '33%'
              },
              answerIndeterminate: {
                top: '45%',
                left: '31%'
              }
            }
          ]
        }
      ]
    },
    '30': {
      video: [
        {
          video: {
            source: 'p30_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '47%'
            }
          }
        },
        {
          video: {
            source: 'p30_v2'
          },
          trigger: {
            button: {
              top: '53%'
            },
            zone: {
              top: '53%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '31': {
      static: [
        {
          image: 'pg31ex6',
          audio: {
            source: 'pg31ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '58%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'painter',
          title: 'HÖR ZU UND ZEICHNE!',
          image: 'pg31ex7',
          trigger: {
            button: {
              top: '42%'
            },
            zone: {
              top: '42%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'ASCULTA SI DESENEAZA CONFORM INDICATIILOR. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '28.5%',
                left: '49%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg31ex7one'
            },
            {
              identifier: 'two',
              position: {
                top: '42.5%',
                left: '22%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg31ex7two'
            },
            {
              identifier: 'three',
              position: {
                top: '57%',
                left: '22%',
                width: '30%',
                height: '13.5%'
              },
              solution: 'pg31ex7three'
            }
          ]
        }
      ]
    },
    '32': {
      static: [
        {
          image: 'pg32ichmag',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p32_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '41%'
            }
          }
        }
      ]
    },
    '33': {
     exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE UND MAL AUS!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '8%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Uneste cuvintele care denumesc culori cu imaginea corespunzatoare si coloreaza cu culoarea indicata. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'verde',
              style: {
                top: '20%',
                left: '15%',
                width: '17%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '33-verde-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'roz',
              style: {
                top: '30%',
                left: '15%',
                width: '17%',
                height: 'auto',
                color: '#F49DC4'
              },
              image: {
                src: '33-roz-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'galben',
              style: {
                top: '40%',
                left: '15%',
                width: '17%',
                height: 'auto',
                color: '#FCC641'
              },
              image: {
                src: '33-galben-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'albastru',
              style: {
                top: '50%',
                left: '15%',
                width: '17%',
                height: 'auto',
                color: '#33BCF1'
              },
              image: {
                src: '33-albastru-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'portocaliu',
              style: {
                top: '60%',
                left: '15%',
                width: '23%',
                height: 'auto',
                color: '#F7A04B'
              },
              image: {
                src: '33-portocaliu-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'rosu',
              style: {
                top: '70%',
                left: '15%',
                width: '13%',
                height: 'auto',
                color: '#EF445F'
              },
              image: {
                src: '33-rosu-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'soarele-banana-rata',
              style: {
                top: '5%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-soarele-banana-rata.png'
              },
              solution: 'galben',
              solutionImg: {
                src: '33-soarele-banana-rata-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'cireasa-inima-focul',
              style: {
                top: '20%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-cireasa-inima-focul.png'
              },
              solution: 'rosu',
              solutionImg: {
                src: '33-cireasa-inima-focul-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'iarba-broasca-bradul',
              style: {
                top: '35%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-iarba-broasca-bradul.png'
              },
              solution: 'verde',
              solutionImg: {
                src: '33-iarba-broasca-bradul-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'morcovul-dovleacul',
              style: {
                top: '49%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-morcovul-dovleacul.png'
              },
              solution: 'portocaliu',
              solutionImg: {
                src: '33-morcovul-dovleacul-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'trandafirul-purcelul-mana',
              style: {
                top: '64%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-trandafirul-purcelul-mana.png'
              },
              solution: 'roz',
              solutionImg: {
                src: '33-trandafirul-purcelul-mana-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'apa-blugii-cerul',
              style: {
                top: '80%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '33-apa-blugii-cerul.png'
              },
              solution: 'albastru',
              solutionImg: {
                src: '33-apa-blugii-cerul-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ]
    },
    '34': {
      video: [
        {
          video: {
            source: 'p34_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '9%'
            }
          }
        }
      ]
    },
    '35': {
      static: [
        {
          image: 'pg35static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '23%'
            },
            zone: {
              top: '23%',
              bottom: '70%'
            }
          }
        },
        {
          image: 'pg35static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '30%'
            },
            zone: {
              top: '30%',
              bottom: '54%'
            }
          }
        },
        {
          image: 'pg35static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '38%'
            }
          }
        },
        {
          image: 'pg35static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '62%'
            },
            zone: {
              top: '62%',
              bottom: '23%'
            }
          }
        },
        {
          image: 'pg35static5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '77%'
            },
            zone: {
              top: '77%',
              bottom: '7%'
            }
          }
        }
      ]
    },
    '36': {
      static: [
        {
          image: 'pg36static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '61%'
            }
          }
        },
        {
          image: 'pg36static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '39%'
            },
            zone: {
              top: '39%',
              bottom: '30%'
            }
          }
        },
        {
          image: 'pg36static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '70%'
            },
            zone: {
              top: '70%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '37': {
      video: [
        {
          video: {
            source: 'p37_v1'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '7%'
            }
          }
        }
      ]
    },
    '38': {
      video: [
        {
          video: {
            source: 'p38_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '16%'
            }
          }
        },
        {
          video: {
            source: 'p38_v2'
          },
          trigger: {
            button: {
              top: '84%'
            },
            zone: {
              top: '84%',
              bottom: '9%'
            }
          }
        }
      ]
    },
    '39': {
     exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'HÖR ZU UND VERBINDE!',
          audio: {
            source: 'pg39ex4',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '8%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'ASCULTA SI UNESTE PERSONAJUL CU OBIECTUL INDICAT. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'bert',
              style: {
                top: '7%',
                left: '10%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '39-bert.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'julia',
              style: {
                top: '24%',
                left: '10%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '39-julia.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'erik',
              style: {
                top: '41%',
                left: '10%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '39-erik.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'nick',
              style: {
                top: '60%',
                left: '10%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '39-nick.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'marion',
              style: {
                top: '77%',
                left: '10%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '39-marion.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'masina',
              style: {
                top: '10%',
                left: '65%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '39-masina.png'
              },
              solution: 'julia',
              solutionImg: {
                src: '39-masina.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'minge',
              style: {
                top: '26%',
                left: '68%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '39-minge.png'
              },
              solution: 'bert',
              solutionImg: {
                src: '39-minge.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'avion',
              style: {
                top: '41%',
                left: '67.5%',
                width: '16%',
                height: 'auto'
              },
              image: {
                src: '39-avion.png'
              },
              solution: 'nick',
              solutionImg: {
                src: '39-avion.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'papusa',
              style: {
                top: '57%',
                left: '68%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '39-papusa.png'
              },
              solution: 'marion',
              solutionImg: {
                src: '39-papusa.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'trenulet',
              style: {
                top: '73%',
                left: '66%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '39-trenulet.png'
              },
              solution: 'erik',
              solutionImg: {
                src: '39-trenulet.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ]
    },
    '40': {
      video: [
        {
          video: {
            source: 'p40_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '41': {
      video: [
        {
          video: {
            source: 'p41_v1'
          },
          trigger: {
            button: {
              top: '89%'
            },
            zone: {
              top: '89%',
              bottom: '4%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'type',
          title: 'FINDE, ZÄHL UND SCHREIB DIE ZAHL!',
          image: 'pg41ex6',
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '12%'
            }
          },
          help: {
            toggle: false,
            text: 'CAUTA OBIECTELE, NUMARE-LE SI SCRIE NUMARUL. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '73%',
                left: '24%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'two',
              position: {
                top: '73%',
                left: '48.9%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'three',
              position: {
                top: '73%',
                left: '74.1%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'four',
              position: {
                top: '80.7%',
                left: '24%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '5'
            },
            {
              identifier: 'five',
              position: {
                top: '80.7%',
                left: '48.9%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '1'
            },
            {
              identifier: 'six',
              position: {
                top: '80.7%',
                left: '74.1%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '2'
            }
          ]
        }
      ]
    },
    '42': {
      static: [
        {
          image: 'pg42ichhabe',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '61%'
            },
            zone: {
              top: '61%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p42_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '39%'
            }
          }
        }
      ]
    },
    '43': {
     exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE UND MAL AUS!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '8%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'UNESTE PARTILE CORESPUNZATOARE SI COLOREAZA JUCARIA DUPA CULOAREA CORESPUNZATOARE. Cand ai terminatapasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'avion-fata',
              style: {
                top: '7%',
                left: '10%',
                width: '30%',
                height: 'auto',
                color: '#8bcb6a'
              },
              image: {
                src: '43-avion-fata-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'masina-fata',
              style: {
                top: '21%',
                left: '13%',
                width: '25%',
                height: 'auto',
                color: '#33bcf1'
              },
              image: {
                src: '43-masina-fata-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'tren-fata',
              style: {
                top: '36%',
                left: '11%',
                width: '28%',
                height: 'auto',
                color: '#ef445f'
              },
              image: {
                src: '43-tren-fata-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'minge-fata',
              style: {
                top: '50%',
                left: '16%',
                width: '19%',
                height: 'auto',
                color: '#fcc641'
              },
              image: {
                src: '43-minge-fata-colorata.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'ursulet-fata',
              style: {
                top: '65%',
                left: '15.5%',
                width: '20%',
                height: 'auto',
                color: '#874a38'
              },
              image: {
                src: '43-ursulet-fata-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'papusa-fata',
              style: {
                top: '80%',
                left: '15.5%',
                width: '20%',
                height: 'auto',
                color: '#f49dc4'
              },
              image: {
                src: '43-papusa-fata-colorat.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'tren-spate',
              style: {
                top: '7%',
                left: '65%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '43-tren-spate.png'
              },
              solution: 'tren-fata',
              solutionImg: {
                src: '43-tren-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'avion-spate',
              style: {
                top: '19%',
                left: '68%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '43-avion-spate.png'
              },
              solution: 'avion-fata',
              solutionImg: {
                src: '43-avion-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'ursulet-spate',
              style: {
                top: '34%',
                left: '72%',
                width: '18%',
                height: 'auto'
              },
              image: {
                src: '43-ursulet-spate.png'
              },
              solution: 'ursulet-fata',
              solutionImg: {
                src: '43-ursulet-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'masina-spate',
              style: {
                top: '48%',
                left: '70.5%',
                width: '21%',
                height: 'auto'
              },
              image: {
                src: '43-masina-spate.png'
              },
              solution: 'masina-fata',
              solutionImg: {
                src: '43-masina-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'papusa-spate',
              style: {
                top: '63%',
                left: '71.5%',
                width: '19%',
                height: 'auto'
              },
              image: {
                src: '43-papusa-spate.png'
              },
              solution: 'papusa-fata',
              solutionImg: {
                src: '43-papusa-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'minge-spate',
              style: {
                top: '78%',
                left: '72%',
                width: '18%',
                height: 'auto'
              },
              image: {
                src: '43-minge-spate.png'
              },
              solution: 'minge-fata',
              solutionImg: {
                src: '43-minge-spate-colorat.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ]
    },
    '44': {
      static: [
        {
          image: 'pg44ex2static1',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '58%',
              left: '12%',
              width: '42%'
            }
          }
        },
        {
          image: 'pg44ex2static2',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '37.5%'
            },
            zone: {
              top: '17%',
              bottom: '58%',
              left: '54%',
              width: '42%'
            }
          }
        },
        {
          image: 'pg44ex2static3',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '42%'
            },
            zone: {
              top: '42%',
              bottom: '33%',
              left: '12%',
              width: '42%'
            }
          }
        },
        {
          image: 'pg44ex2static4',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '62.5%'
            },
            zone: {
              top: '42%',
              bottom: '33%',
              left: '54%',
              width: '42%'
            }
          }
        },
        {
          image: 'pg44ex2static5',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '67%'
            },
            zone: {
              top: '67%',
              bottom: '7%',
              left: '12%',
              width: '42%'
            }
          }
        },
        {
          image: 'pg44ex2static6',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '88%'
            },
            zone: {
              top: '67%',
              bottom: '7%',
              left: '54%',
              width: '42%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p44_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '86%'
            }
          }
        }
      ]
    },
    '45': {
      static: [
        {
          image: 'pg45static1',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '24%'
            },
            zone: {
              top: '24%',
              bottom: '54%'
            }
          }
        },
        {
          image: 'pg45static2',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '44%'
            }
          }
        },
        {
          image: 'pg45static3',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '22%'
            }
          }
        },
        {
          image: 'pg45static4',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '78%'
            },
            zone: {
              top: '78%',
              bottom: '13%'
            }
          }
        }
      ]
    },
    '46': {
      static: [
        {
          image: 'pg46static1',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '82%'
            }
          }
        },
        {
          image: 'pg46static2',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '19%'
            },
            zone: {
              top: '19%',
              bottom: '37%'
            }
          }
        },
        {
          image: 'pg46static3',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '65%'
            },
            zone: {
              top: '65%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '47': {
      video: [
        {
          video: {
            source: 'p47_v1'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '58%'
            }
          }
        },
        {
          video: {
            source: 'p47_v2'
          },
          trigger: {
            button: {
              top: '42%'
            },
            zone: {
              top: '42%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '48': {
      static: [
        {
          image: 'pg48nikolaustag',
          audio: {
            // change me
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '46%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p48_v1'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '49': {
      video: [
        {
          video: {
            source: 'p49_v1'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '50': {
      video: [
        {
          video: {
            source: 'p50_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '51': {
      exercise: [
        {
           type: 'linker',
           image: '02',
           title: 'VERBINDE!',
           trigger: {
             button: {
               top: '10%'
             },
             zone: {
               top: '9%',
               bottom: '40%'
             }
           },
           help: {
             toggle: false,
             text: 'UNESTE TEXTUL CU IMAGINEA CARE SE POTRIVESTE. Cand ai terminat apasape cheita si verifica. Succes!'
           },
           data: [
             {
               identifier: 'dimineata',
               style: {
                 top: '12%',
                 left: '5%',
                 width: '25%',
                 height: 'auto'
               },
               image: {
                 src: '51-dimineata.png'
               },
               solution: 'guten-morgen',
               solutionImg: {
                 src: '51-dimineata.png'
               },
               sourceAnchors: [],
               targetAnchors: ["RightMiddle"]
             },
             {
               identifier: 'ziua',
               style: {
                 top: '50%',
                 left: '5%',
                 width: '25%',
                 height: 'auto'
               },
               image: {
                 src: '51-ziua.png'
               },
               solution: 'guten-tag',
               solutionImg: {
                 src: '51-ziua.png'
               },
               sourceAnchors: [],
               targetAnchors: ["RightMiddle"]
             },
             {
               identifier: 'guten-morgen',
               style: {
                 top: '24%',
                 left: '35%',
                 width: '30%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                 src: '51-guten-morgen.png'
               },
               sourceAnchors: ["LeftMiddle","RightMiddle"],
               targetAnchors: []
             },
             {
               identifier: 'guten-tag',
               style: {
                 top: '35%',
                 left: '38.5%',
                 width: '22%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                 src: '51-guten-tag.png'
               },
               sourceAnchors: ["LeftMiddle","RightMiddle"],
               targetAnchors: []
             },
             {
               identifier: 'guten-abend',
               style: {
                 top: '46%',
                 left: '36.5%',
                 width: '27%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                 src: '51-guten-abend.png'
               },
               sourceAnchors: ["LeftMiddle","RightMiddle"],
               targetAnchors: []
             },
             {
               identifier: 'guten-nacht',
               style: {
                 top: '57%',
                 left: '37%',
                 width: '25%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                 src: '51-guten-nacht.png'
               },
               sourceAnchors: ["LeftMiddle","RightMiddle"],
               targetAnchors: []
             },
             {
               identifier: 'noaptea',
               style: {
                 top: '12%',
                 left: '70%',
                 width: '25%',
                 height: 'auto'
               },
               image: {
                 src: '51-noaptea.png'
               },
               solution: 'guten-nacht',
               solutionImg: {
                 src: '51-noaptea.png'
               },
               sourceAnchors: [],
               targetAnchors: ["LeftMiddle"]
             },
             {
               identifier: 'seara',
               style: {
                 top: '50%',
                 left: '70%',
                 width: '25%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                 src: '51-seara.png'
               },
               solution: 'guten-abend',
               solutionImg: {
                 src: '51-seara.png'
               },
               sourceAnchors: [],
               targetAnchors: ["LeftMiddle"]
             }
           ]
        },
        {
          type: 'picker',
          title: 'WAS PASST NICHT?',
          image: 'pg51ex2',
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: '(lipsa excel)'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '37%',
                left: '14%',
                width: '73%',
                height: '6.5%'
              },
              answer: {
                left: '74.5%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '44.2%',
                left: '14%',
                width: '73%',
                height: '6.5%'
              },
              answer: {
                left: '37.5%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '51.5%',
                left: '14%',
                width: '73%',
                height: '6.5%'
              },
              answer: {
                left: '34.5%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '58.7%',
                left: '14%',
                width: '73%',
                height: '6.5%'
              },
              answer: {
                left: '65.5%'
              }
            }
          ]
        }
      ]
    },
    '52': {
      exercise: [
        {
          type: 'typer',
          title: 'FINDE DIE FARBE VERBINDE UND MAL AUS?',
          image: 'pg52ex3',
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '42%'
            }
          },
          help: {
            toggle: false,
            text: 'LITERELE S-AU AMESTECAT. GASESTE CUVANTUL CORESPUNZATOR UNEI CULORI SI COLOREAZA IMAGINEA POTRIVITA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          // audio: {
          //   source: 'fundal',
          //   state: 'stopped'
          // },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36%',
                left: '48%',
                width: '25%'
              },
              model: '',
              solution: 'GELB'
            },
            {
              identifier: 'two',
              position: {
                top: '43%',
                left: '48%',
                width: '25%'
              },
              model: '',
              solution: 'BLAU'
            },
            {
              identifier: 'three',
              position: {
                top: '50.2%',
                left: '48%',
                width: '25%'
              },
              model: '',
              solution: 'GRÜN'
            },
            {
              identifier: 'four',
              position: {
                top: '57.5%',
                left: '48%',
                width: '25%'
              },
              model: '',
              solution: 'ROSA'
            }
          ]
        },
        {
          type: 'type',
          title: 'RECHNE!',
          image: 'pg52ex4',
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '7%'
            }
          },
          help: {
            toggle: false,
            text: 'INLOCUIESTE CUVANTUL CU NUMARUL CORESPUNZATOR SI CALCULEAZA. SCRIE REZULTATUL. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.5%',
                left: '55.8%',
                width: '5.1%',
                height: '4%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'two',
              position: {
                top: '44%',
                left: '55.2%',
                width: '5.1%',
                height: '4%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'three',
              position: {
                top: '51%',
                left: '66.3%',
                width: '5.1%',
                height: '4%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'four',
              position: {
                top: '58%',
                left: '64.8%',
                width: '5.1%',
                height: '4%'
              },
              model: '',
              solution: '1'
            }
          ]
        }
      ]
    }
  }
}
