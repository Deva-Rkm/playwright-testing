# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web_table.spec.js >> web handling
- Location: tests\web_table.spec.js:2:5

# Error details

```
ReferenceError: rows is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - generic [ref=e125]:
        - heading "Web Tables" [level=1] [ref=e128]
        - generic [ref=e129]:
          - generic [ref=e130]:
            - button "Add" [ref=e132] [cursor=pointer]
            - generic [ref=e134]:
              - textbox "Type to search" [ref=e135]
              - button [ref=e136] [cursor=pointer]:
                - img [ref=e137]
          - table [ref=e139]:
            - rowgroup [ref=e140]:
              - row "First Name Last Name Age Email Salary Department Action" [ref=e141]:
                - columnheader "First Name" [ref=e142]
                - columnheader "Last Name" [ref=e143]
                - columnheader "Age" [ref=e144]
                - columnheader "Email" [ref=e145]
                - columnheader "Salary" [ref=e146]
                - columnheader "Department" [ref=e147]
                - columnheader "Action" [ref=e148]
            - rowgroup [ref=e149]:
              - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete" [ref=e150]:
                - cell "Cierra" [ref=e151]
                - cell "Vega" [ref=e152]
                - cell "39" [ref=e153]
                - cell "cierra@example.com" [ref=e154]
                - cell "10000" [ref=e155]
                - cell "Insurance" [ref=e156]
                - cell "EditDelete" [ref=e157]:
                  - generic [ref=e158]:
                    - generic "Edit" [ref=e159] [cursor=pointer]:
                      - img [ref=e160]
                    - generic "Delete" [ref=e162] [cursor=pointer]:
                      - img [ref=e163]
              - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete" [ref=e165]:
                - cell "Alden" [ref=e166]
                - cell "Cantrell" [ref=e167]
                - cell "45" [ref=e168]
                - cell "alden@example.com" [ref=e169]
                - cell "12000" [ref=e170]
                - cell "Compliance" [ref=e171]
                - cell "EditDelete" [ref=e172]:
                  - generic [ref=e173]:
                    - generic "Edit" [ref=e174] [cursor=pointer]:
                      - img [ref=e175]
                    - generic "Delete" [ref=e177] [cursor=pointer]:
                      - img [ref=e178]
              - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete" [ref=e180]:
                - cell "Kierra" [ref=e181]
                - cell "Gentry" [ref=e182]
                - cell "29" [ref=e183]
                - cell "kierra@example.com" [ref=e184]
                - cell "2000" [ref=e185]
                - cell "Legal" [ref=e186]
                - cell "EditDelete" [ref=e187]:
                  - generic [ref=e188]:
                    - generic "Edit" [ref=e189] [cursor=pointer]:
                      - img [ref=e190]
                    - generic "Delete" [ref=e192] [cursor=pointer]:
                      - img [ref=e193]
          - generic [ref=e196]:
            - group [ref=e198]:
              - button "First" [disabled]
              - button "Previous" [disabled]
              - button "Next" [disabled]
              - button "Last" [disabled]
            - generic [ref=e199]:
              - text: Page
              - strong [ref=e200]: 1 of 1
            - combobox [ref=e202]:
              - option "Show 10" [selected]
              - option "Show 20"
              - option "Show 30"
              - option "Show 40"
              - option "Show 50"
      - iframe [ref=e206]:
        - generic [ref=f5e2]:
          - link "Advertisement" [ref=f5e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsuExNhwF8odSB4iooJI5-syxL8EpfiOZtF41vFm_UVSVWScl4RQqvNG8eZIlIzyd2y8vDx3bid7kTWuns9qJqjS7RLtuO9rW5_6jDqE0N3lM5Ru2cq4FrzFtAshY_fTIlnJbOQbqEk2cNXKUsEvFzHCyq8JBtINCVfCcKW69BDG5DQhPyjju-1IxnmB5WnA-bOHtBvJqUxvFVYpbfaXQGlEu0f2Q4Prdf3MpC8eFtStJ0Q0yKVlt9lRHQBZzJ31nQj3UyEFICGYY6CVg4nChWMFYnUOAsVdJeOErjl93DNrCc2uKR_bMHYD_kxhv1jUyvZhqMNeT3UY8FgSw63fPWez8VrPT1p2pzSrcTr-EvsN0040s-vgbGjUUP3SCHRTLLbf3JdN2LvV5LJBFWcUIiwT3b3Yt-anwFOjB0hkQK5-qKU7Rd6eMP-oN_7U-HCGr5ly7wj_rFnaZyQc-HBjDvbnHTNKTLuotWakqVgUtWF8VW9yFGAYtHt-JtQcLf7TB2adFjPWOvyzIveuuGR4V-zbBuv0NMqA5LvHbR3oHMwW9LH-e-DZCvcuLb1LROQcT-jyc37iIKNEw4b8sRNtqT-48fm2Z-R2kxLP4NbZOocT14gVDKgQrZ9IKrM_oJKmphOKPfsAEAFg7wvbvWgjiIJty042tw9y-wh6jugqXK4l3BzM0h-SxBxxNp9__Stc3-aLU3m8z2rRobVfeStC_RHGd7yWp5CGqB3w4hBUDAQslfC3wy9qJSQGmFlh4HurSbdPjSuLw11KVo9iEzwXHsLWct13RrWZsFBIJmjmFwkeCULocZQYhGgDGCfaUP3d3o4ZOTBgDMP49TMHpVchGZs27KaofCP4b_2u-1bL5aYiDKMTi9mD6JKkKBU0CSaA5h_GFHLURsviwqctroGOF4ftVetqela-xv_w1OJIiJ7Biwift2mWXpkUZX3K_IvNHLLtTraOghvuauFIho6h0xt6HyzcaHrgeFBZpuDGNmQ2wcFf3R6_rS5FQqxeoCd1aHwjwys2DfqPcldtBvEPedFobKsWHeBfWjYr8Bu3DQfpS4ovuQ_oJkQ-ex8eyouIZ-Io8BDcWa7flF49WwCkznOuEicXgAIyMx9LotFAJrT8k_7OP_VgDv23g70Xi_Pom6hvb8Izx-M5uhtx56uf-STw_3hT-5b3ziaFTOdA8idsWYfF7CccOJcjMZJC4Ft8iCEm9iHTt7munWodjECiWK1menpRBuNM7lbfdXWeiQ7IxVFq4hLuktwGJPS3M8nNTF-fcaJ_SWraya-gdbaSIjAlQmTGMVJF7xhk67MxuvuFFCfObm7P4Fff1EoKu_BnA6Q2qZ8uYrfk2XxnUmJlJ6f_abDGrYcwHvfD_LDAkmkmP2eEycQtz1L9sHqd4oX_TgvwtNxPil9Y9U6V7wAJSFuG41-StM2pPyonKfmglf53fs5TUV_74dRgMZZemAeAIK1axe1AHUoXwCIz2VBZB8HakpjyJLwNSMqCuuecv6o8PyQhpuO-vFxQYA_hw3r8DZB_5RvOH9TDBhZv0keYtiGoAShRy2kjcj0I2NGaNfu3DasBHCJ4lHuQ0wFP4sKpUZuROsDG-MmPJj6JV4lkQ4MjORMgilvqU0gKfpnb4vO6pooGVCO-sVMXr10AtDzcI5q0qaXKvkYp71AzTG_flxWZZ-Cn7a3b085x5FkI3eDuhNW65hqPTHeEuXSBL8nl1EUvpVjAdSeLEWdB-xQv3oAPk_ms_UxqGBiTRz5C6QhT2zBo_H3_mIfUe5IORW2veDViPLq8ieImGYLN63DFzddu_Y6bPz6ODE_sg5O3lA&sai=AMfl-YRVUqbtv8COsz3_0lQ_1AOWY5B1bLylW69Da23fcI_YFEl_VgDoicyTsTFAdZJbeVdhbGDbY_RtFhV-PXgjr9KfNikpW8iY_CcxjxA_CSP1p5Huh53xRGYyyMegqm7MXZuIY_GBmCIfyhOWFiL7Ew1CiuzIzpzOlYW0F-SjUMcNd0vaXlZCe1kmpAnDD4cpcdE9p24o89o_iuR0iMlWca-8fRFJ-s8l3Cgxu8Dz_oiEv63TqNc6Zj6t2thZ31r6gd8cfqpQn6hGxNluyEQl-qcT8rVdnwWT1smrMwctqA_ZJoXqnJRdVKYBD45hYB8jxvu1w-NzTRBDjmnSGYZGbW7AH_SmEKXbJtAuKyWrkYOgvs5JmI6U5sRGnR8LhWS22UTbdy0xZluee7m_aGOTlBTzIPOehqw0Ud2MRfZWm5D2nOdSb_2Fp4A5LLwT6MvxC2zVuoHnsdolWOpLT9hEAQUzEWYpEoCF4zsN-s5LXINhDc81MQIVR7uDqWJLhLOddv6Ydqty2QrlZ9ytA2DP-JuOD9F8fp1KY6TqavIEX_L_LYOfnqBrdamQnvjhqfSccu6c8NcI6hbBxOQHEODP0hK4X3-Cuf5pQIjq-EPpsswqdGnFTZgVx11L0xzXZypOUwBq_JyiH3JOafABYR8B4EkNNjqWDWc2u3BfO5RFVRsG5XBD2n8iTz5M6m_VrICtaG2cgSoGA5ARFxhnKbFYu17xOfyiK6RzrE_ztaRNo7k7MePfhXF8CReVScwYVniB4NQ_DQYFiaz6zmuo1Uy6H5pKsThX_qQ4O18SmW1BkIchNUlJhMJ8WTyjjKkUtZgNwPNy_rbfnx5sMbEjLJFqGxyYLmgRDADp--15ND1prrBRQ6CsdHhYN_oXk1zKW-G3WmgUXcUEDIkB2-uue6-WtFPcibfb8VK8be3x74ru4-Wuf_c0FBQY2EKiLUP9HXSwkDPjafQYIBMaxsxzMm4ybU9D1VrWlxfelk4lHArc6nqnnT3FjL0Yokh2sw&sig=Cg0ArKJSzDDiWOeWXsux&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9sZW5vdm8uY29t&urlfix=1&adurl=https://www.lenovo.com/in/en/d/deals/business%3Fcid%3Din:display:vvihi8%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24159655819
            - img "Advertisement" [ref=f5e5]
          - generic [ref=f5e6]:
            - generic:
              - img [ref=f5e10] [cursor=pointer]
              - button [ref=f5e12] [cursor=pointer]:
                - img [ref=f5e13]
    - iframe [ref=e214]:
      - generic [ref=f10e3]:
        - link [ref=f10e4] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CgVHs5d2eaqW2Kamp88EPwZPu-QPKv9-_iQGav4vZyxWhpvjz0B0QASDG-9Z5YOWS6IPYDqAB_-bx_CnIAQKpAuuKLoAPukY-4AIAqAMByAMIqgSKAk_QGBRRKhXLttWOnh7yIyvLMpTnQqv8SLgN_FBE553n31CNg7VTwooa83RR4L42-LDXDmsMtMp2O_StWMSQrlSLRoit7shCNVQo0dNu3po11nnkpccBpdynLI1SVBiZJSSVn_QAqhCpoZRhQn6Jnk1kI0Hl-c08jmjkmlVsMD87Y84L6OeyR5wNBCnkml3Zwr9diObjOsA0_UzUPv5tyN9gptobiELH2LVgReEK83KFQWTfMNSDEVZM_e2sZ-rmfYuqv7cRHn0ofQ9bvwu6YmvrruZu5t8d9VUs0ya_qn3gCcX3xXhBGYhwN9UH7hgeDxGfTypc0qSW6bfNijbHfpbfluXxF_ck3ZAowATFjufZ5wXgBAGIBfTXppxaoAYCgAf_nsLcBKgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMgiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljg0O_q6dyWA2AB8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQmQ5H62FffQKoAKA5gLAcgLAaIMA5ABAaoNAklOyA0B4g0TCIaR8Orp3JYDFanUPAIdwYk7P-oNEwij3fDq6dyWAxWp1DwCHcGJOz_wDQKIDv___________wHYEwPQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo2MTY4NTc2NTA1UAa6FwI4AaoYFwkAAAAAkE0AQRIKNjE2ODU3NjUwNRgBshgJEgLPahgCIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI5byH6-nclgMVqdQ8Ah3BiTs_EAEYASAAEgLzOfD_BwE&num=1&cid=CAQSngIAQM4h3IDpOBC3Bhe_hSyyZ74akKoNn_XgDEleCSSp7K5D2AOsr-iFYAdo-UvLlkWUFiw-9adDsNZxstlyrV0Sa1Ww_etTJjov_A9Cl3qjKkqYkhy4nFeE4nXC7NCeF0qzBjINLejLI7RNuHieoomQGtKbK2Ngscv50py2H15lTQwgXHqjim1cKhlFPcQagzUAG6f1YXdhgrlCErCaUcjgy5rL5NgbA7JgUXajD3V_yBRV6bz-iHOXdbflK3omb_9Fw7ZY9dcOSsB_NvNMqB8ud8Xvw-j1TYVj77UtcCWc1K8wqgttdBerI-96mZSoIDZVJsDpr4bgDQOgi7Nz4OjxtJZwi1LR6u8pQneryoYuJHfIsay6QaanznerorExGAE&sig=AOD64_2jwiQ0VEQt7zS--iGvOBUym8_0gg&client=ca-pub-4573231550355221&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://dhar.nic.in/%3Fgad_source%3D5%26gad_campaignid%3D24218545140%26gclid%3DEAIaIQobChMI5byH6-nclgMVqdQ8Ah3BiTs_EAEYASAAEgLzOfD_BwE
        - generic [ref=f10e6]:
          - link [ref=f10e8] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypo3WXkeAKCiwe0AKTpYmGGviV3cXkJnyMjDm-Tly4e86eSpF71b76XHr1ZkHtPKJwjzrl3svMeoE9P9heTzsmsv_Bz1XUQ95bnVlJFf6jKqPnHkRy3b-0WaqCPeqAvrB15aBzTvYoW1Uty99_e2uaHJfHddlKkUu7NG35p5uUA2ix5oU56bht5VzBlrgIE9xazUUIQiJ_kQE_WNsUB_bxDSQnR82b4SMtLKO-wwV1PNaIJaDlgfI4UlkbIGmvB_ZjP8R0ixFgTykOPGEHAgvpdGHtDq5_8i5iB49S6xM6UM7iO5S0QXlAzYvSXyljMf0_P-Is5YFoMrE8vhXQlfsvn6bbWSh-vwOPlKn7YPyxJNcIU6bfKNKg0Fnr21y0_pmucmOb7lr3L3fA-T4qLIfDIfuMguja9eAE9H8XOQM7hFHrkxFl2dvW5Muj03lqa1YCK4LvEtoWJNQuYtiR5_h_4Pqz3__WjR6clrHTngSXV0pPYSfHjnBCTHVuAWJrxgm1nzr5mGGdWFxbuqa-hOsssV6qCqSJ4rZkTWExWlnaMCyA4F0jQMhPFLYB3eyLPd9UinkTLjcH3y7vTGU0IC2VVGm0KS5U1FI8JggNvaWGYmun1ahnYwR2bD7z9PAb5yP47TbpHQDEeief06-vBixZAnnc9gQoV1167xNNDQHtNeHTpOqeyLiCSOw0Ihl5r_HkCeld9d6ouZEW9-m4qvv0YPN0gSqdRHJ8p12U_phHjbAxlFsjclosTSe5raRhuPLUipzEWrjoTPmQ7b6PlY0nJQ8_DyBF5XpwkyfEqsJ7Gfa60owMkOJulfJeJt5maI-59b1LPUCt4QmbyauJVXcD_uCXTJodOKGSJHEpIf99nzMw996ufLdDE1Lekz1MK3N433J-Wfget3XuuY6TpttYGE8Z2zhGlKCvoNRw5GHMnVFCBExkQWJ2MfSxaHfOx25AEomzFL7XsC_BVenYsqSJDRIOAa1whdjXrpD9fljwyS222sT3jLXhv-iec8DyMnumvqUq_Fte3TodZ4bW8iIQ7pGLNiJSsetc87vmgcEtNyLtCVZr0ExvhV8cN5kiQzheW2FjyRlSJJdkk2TBQrlh2Vi0H6o8xAWfn-s9jwxf41vzqaP8VvJEO3Fsp_JjEMnDo_pyOYXb2bxxWxq_d-0blPdMMHS5dG7ZN-qRFa7F5dtNTh2jrMozgup0UvjuyjkrfENUXiZnq9fLAcvZb-cRpXynWRaHXjOxqVFXzFQts8LOeDkaLBR3Z0ox7j2nNGtFEkXxQHVxp9lbQ-fIIwForyPYKYg6JHcGfztx4XLPcccQRg_wC5ydC791ukSriU7RO9oAiqMBlkntDMl01ylfG2GEYjExreO7-u0kmyu1yR2DSo1NvVb6bvUCg8XszkV-PiVuE0tttBrrc8Kqf59n-aW5ru2Ek2FdVzQ3Trk3t4lBjU3vA36WWIZLomRSEMjtwwCOxuGZdVfWFdnwyh5c_3XJAJQAcUWA7XZNy_oPnwOzI7SO6YtHkqIWMN3RHJOnHi9kitCulMBztLGTxED7iUTFKSZJlthFAONMV295lKoBoDmhODv87THJN8MNqvm2V6J0zKqY_h8zwz0yQ7hHCHEC869fgiUJMmf7FCWx-5Oi3T07CvRvsWZlb-zjzCm1qxxRQyJfA31-OGsMd9uxqCpktYbFd6LX0SD52i1ukpGlmPX10gpZgiwZRI6CVMhCzZS4caVYg8MbOzRBf5xI3_JQTcrGdypvrCCcimFIU0HaeVX_InkUNgb4X6kltl1Gnq6r90RxjfrJhzltZE9Iu_j7ODTXyNjbu9ZxT6lVqMu4xE5JobVgsYzMuLyjEeL0RLH-UG1GYETwVQhVekOfQSpZxWoPRPdqSxHeTfE-bQs77QIPnA3eGB0A9UmB2cjGiqK47sqbhAY2agiTfuiQmjfY-r3XG_rhUEGgyjexMlj8XO_ZnK7mLviwP4oWIjyB_ipV2MzLA7uP43B0w454G20ggvlYEPdQCxZS3QBWFvAeSAWqSIFYUzKDwcuD67VAaWYK2Vg6j9N6TZC1ls3Gs9qoD0xYfHW__mrw92mhFZTtLYtutUIwTzoD0y-l3M5e5LdV6uG3oAyG8YdEZgkcCT-j8-atiKyVntrbpnRQzslnsV-3Vz9Ux7BgT5WWW1X5aziL6Q4VUacBE9F82o_aFsPRxYXHowUgrky0gh1Z8Dae290qjTf_cN1WvYHrlx3t5EfsfYB5Eoq3qbej07WDM5-bt2QAJ75g0ObvU3UFZDPEuhskNuZ1e4wTiheqQarP680MTBeL4dnJUq-OIZlY-Kx4lw0wQuex2_0j2-RSYdjP4CXyBrzobZKIe-5FiZbYs6CUGFUoNd-vB8EDlA46JWTsFQdQKcn9OGRvFJVme1xhLoWQYBLlOu-CYNGoEOS5lBz4pPA6oRdsSQt8KZ2r4z-SgXLEIlh0P3owPH6sMe3HXPpikpuuCmFvOm4AgLZ9hZQRXRIa1b91xqgsvs8HgQAeCWjmMrLloZubAHHTfwHPAe90Cbap2nm36CTD-t5GDrV9zSsGnHN48VV81NzhMKaCVsMuH5411d5F6QYwrp8NnSHK6eiz0xk8H6fkctionBddzXVzeHp3P3ZlX5hwVfyIIBZfs34CmQGHbV5uzWB5pVhB-yPyizR5cJvBOq-VjpTHnhhlRI8IKvzqsNkmHp7Rrg5gTQLd5m34579sX_r6jSdXKpFyaDPZDFhTxg511qWfhMXmizrM0lRMPA3FFoQZemI5H9bHQCeWIriaE_nWeZOIdx8iQQbN-ncUsk3QyHZGClW854D__ML76bon-Fpq3QPpcUcaVauOHMqqLST9QHz9BYBa6B_0v0uPHAmqrzIAUVPIspXJYA0sv-aPLknJFShlGV876tXSTRQuem93zord_mhveNZxX2Bi66mACtfhUCMYACs9V8qBiEWPm9C3dIgjU8aFkrUrzaEebmmOixETi47G64B0mo0hHaKD4DGl6MmYPLVITAP9z7VjvrRaf3Iko2HNKckyhlqcJl5xNjCHfTz8TIs41pzRv_KKR2GmPylqvsQir_5nlLwu0ynDDphujTTsOqdjSaS8X9n4XPdV1uXgLExvlsAbBr8MCSQbT4yaTN-x3wId9VRzb01DFmy1gm4KJI4An_Gj_zKRkkf895Q6BnIFDp6Q&opi=122715837
            - img [ref=f10e10]
          - link [ref=f10e12] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypo3WXkeAKCiwe0AKTpYmGGviV3cXkJnyMjDm-Tly4e86eSpF71b76XHr1ZkHtPKJwjzrl3svMeoE9P9heTzsmsv_Bz1XUQ95bnVlJFf6jKqPnHkRy3b-0WaqCPeqAvrB15aBzTvYoW1Uty99_e2uaHJfHddlKkUu7NG35p5uUA2ix5oU56bht5VzBlrgIE9xazUUIQiJ_kQE_WNsUB_bxDSQnR82b4SMtLKO-wwV1PNaIJaDlgfI4UlkbIGmvB_ZjP8R0ixFgTykOPGEHAgvpdGHtDq5_8i5iB49S6xM6UM7iO5S0QXlAzYvSXyljMf0_P-Is5YFoMrE8vhXQlfsvn6bbWSh-vwOPlKn7YPyxJNcIU6bfKNKg0Fnr21y0_pmucmOb7lr3L3fA-T4qLIfDIfuMguja9eAE9H8XOQM7hFHrkxFl2dvW5Muj03lqa1YCK4LvEtoWJNQuYtiR5_h_4Pqz3__WjR6clrHTngSXV0pPYSfHjnBCTHVuAWJrxgm1nzr5mGGdWFxbuqa-hOsssV6qCqSJ4rZkTWExWlnaMCyA4F0jQMhPFLYB3eyLPd9UinkTLjcH3y7vTGU0IC2VVGm0KS5U1FI8JggNvaWGYmun1ahnYwR2bD7z9PAb5yP47TbpHQDEeief06-vBixZAnnc9gQoV1167xNNDQHtNeHTpOqeyLiCSOw0Ihl5r_HkCeld9d6ouZEW9-m4qvv0YPN0gSqdRHJ8p12U_phHjbAxlFsjclosTSe5raRhuPLUipzEWrjoTPmQ7b6PlY0nJQ8_DyBF5XpwkyfEqsJ7Gfa60owMkOJulfJeJt5maI-59b1LPUCt4QmbyauJVXcD_uCXTJodOKGSJHEpIf99nzMw996ufLdDE1Lekz1MK3N433J-Wfget3XuuY6TpttYGE8Z2zhGlKCvoNRw5GHMnVFCBExkQWJ2MfSxaHfOx25AEomzFL7XsC_BVenYsqSJDRIOAa1whdjXrpD9fljwyS222sT3jLXhv-iec8DyMnumvqUq_Fte3TodZ4bW8iIQ7pGLNiJSsetc87vmgcEtNyLtCVZr0ExvhV8cN5kiQzheW2FjyRlSJJdkk2TBQrlh2Vi0H6o8xAWfn-s9jwxf41vzqaP8VvJEO3Fsp_JjEMnDo_pyOYXb2bxxWxq_d-0blPdMMHS5dG7ZN-qRFa7F5dtNTh2jrMozgup0UvjuyjkrfENUXiZnq9fLAcvZb-cRpXynWRaHXjOxqVFXzFQts8LOeDkaLBR3Z0ox7j2nNGtFEkXxQHVxp9lbQ-fIIwForyPYKYg6JHcGfztx4XLPcccQRg_wC5ydC791ukSriU7RO9oAiqMBlkntDMl01ylfG2GEYjExreO7-u0kmyu1yR2DSo1NvVb6bvUCg8XszkV-PiVuE0tttBrrc8Kqf59n-aW5ru2Ek2FdVzQ3Trk3t4lBjU3vA36WWIZLomRSEMjtwwCOxuGZdVfWFdnwyh5c_3XJAJQAcUWA7XZNy_oPnwOzI7SO6YtHkqIWMN3RHJOnHi9kitCulMBztLGTxED7iUTFKSZJlthFAONMV295lKoBoDmhODv87THJN8MNqvm2V6J0zKqY_h8zwz0yQ7hHCHEC869fgiUJMmf7FCWx-5Oi3T07CvRvsWZlb-zjzCm1qxxRQyJfA31-OGsMd9uxqCpktYbFd6LX0SD52i1ukpGlmPX10gpZgiwZRI6CVMhCzZS4caVYg8MbOzRBf5xI3_JQTcrGdypvrCCcimFIU0HaeVX_InkUNgb4X6kltl1Gnq6r90RxjfrJhzltZE9Iu_j7ODTXyNjbu9ZxT6lVqMu4xE5JobVgsYzMuLyjEeL0RLH-UG1GYETwVQhVekOfQSpZxWoPRPdqSxHeTfE-bQs77QIPnA3eGB0A9UmB2cjGiqK47sqbhAY2agiTfuiQmjfY-r3XG_rhUEGgyjexMlj8XO_ZnK7mLviwP4oWIjyB_ipV2MzLA7uP43B0w454G20ggvlYEPdQCxZS3QBWFvAeSAWqSIFYUzKDwcuD67VAaWYK2Vg6j9N6TZC1ls3Gs9qoD0xYfHW__mrw92mhFZTtLYtutUIwTzoD0y-l3M5e5LdV6uG3oAyG8YdEZgkcCT-j8-atiKyVntrbpnRQzslnsV-3Vz9Ux7BgT5WWW1X5aziL6Q4VUacBE9F82o_aFsPRxYXHowUgrky0gh1Z8Dae290qjTf_cN1WvYHrlx3t5EfsfYB5Eoq3qbej07WDM5-bt2QAJ75g0ObvU3UFZDPEuhskNuZ1e4wTiheqQarP680MTBeL4dnJUq-OIZlY-Kx4lw0wQuex2_0j2-RSYdjP4CXyBrzobZKIe-5FiZbYs6CUGFUoNd-vB8EDlA46JWTsFQdQKcn9OGRvFJVme1xhLoWQYBLlOu-CYNGoEOS5lBz4pPA6oRdsSQt8KZ2r4z-SgXLEIlh0P3owPH6sMe3HXPpikpuuCmFvOm4AgLZ9hZQRXRIa1b91xqgsvs8HgQAeCWjmMrLloZubAHHTfwHPAe90Cbap2nm36CTD-t5GDrV9zSsGnHN48VV81NzhMKaCVsMuH5411d5F6QYwrp8NnSHK6eiz0xk8H6fkctionBddzXVzeHp3P3ZlX5hwVfyIIBZfs34CmQGHbV5uzWB5pVhB-yPyizR5cJvBOq-VjpTHnhhlRI8IKvzqsNkmHp7Rrg5gTQLd5m34579sX_r6jSdXKpFyaDPZDFhTxg511qWfhMXmizrM0lRMPA3FFoQZemI5H9bHQCeWIriaE_nWeZOIdx8iQQbN-ncUsk3QyHZGClW854D__ML76bon-Fpq3QPpcUcaVauOHMqqLST9QHz9BYBa6B_0v0uPHAmqrzIAUVPIspXJYA0sv-aPLknJFShlGV876tXSTRQuem93zord_mhveNZxX2Bi66mACtfhUCMYACs9V8qBiEWPm9C3dIgjU8aFkrUrzaEebmmOixETi47G64B0mo0hHaKD4DGl6MmYPLVITAP9z7VjvrRaf3Iko2HNKckyhlqcJl5xNjCHfTz8TIs41pzRv_KKR2GmPylqvsQir_5nlLwu0ynDDphujTTsOqdjSaS8X9n4XPdV1uXgLExvlsAbBr8MCSQbT4yaTN-x3wId9VRzb01DFmy1gm4KJI4An_Gj_zKRkkf895Q6BnIFDp6Q&opi=122715837
            - img [ref=f10e14]
        - img [ref=f10e17] [cursor=pointer]
        - generic [ref=f10e27]:
          - generic [ref=f10e30] [cursor=pointer]: Not interested in this ad
          - generic [ref=f10e33] [cursor=pointer]: Ad covered content
          - generic [ref=f10e36] [cursor=pointer]: Ad was inappropriate
          - generic [ref=f10e39] [cursor=pointer]: Seen this ad multiple times
        - generic [ref=f10e43]: Thanks. Feedback improves Google ads
        - generic [ref=f10e47]:
          - text: Ad closed by
          - img [ref=f10e48]
  - contentinfo [ref=e215]:
    - generic [ref=e216]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | test("web handling",async ({page})=>{
  3  |     await page.goto("https://demoqa.com/webtables");
  4  |     await page.waitForTimeout(2000);
  5  |     const tab = await page.locator('table tbody tr');
  6  | console.log(await tab.count());
  7  |  
  8  | // for (let i=0 ; i<await tab.count();i++){
  9  | //     const cell =await tab.nth(i).locator('td');
  10 | //     // /console.log(await cell.nth(i).textContent());
  11 | //     console.log(await cell.count());
  12 | 
  13 | //     for (let j=0;j<await cell.count();j++){
  14 | //     const colum = console.log(await cell.nth(j).textContent());
  15 | // console.log(await colum);
  16 | // 
  17 |  for(let i=0;i<await tab.count();i++){
  18 |     const text = await tab.nth(i).textContent();
  19 |     if(text.includes('Vega')&& text.includes('cierra')){
> 20 |       const email = await rows.nth(i).textContent();
     |                     ^ ReferenceError: rows is not defined
  21 |       console.log(email);
  22 |       await rows.nth(i).getByTitle('Delete').click();
  23 |     }
  24 |  }
  25 |  console.log(await tab.count());
  26 | });
```