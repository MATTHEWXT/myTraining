import React from "react";
import './FindUsers.css'

const findUsers = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg',
                followed: true,
                name: 'Victor',
                status: 'Hello i\'m cool Developer',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 1,
                photoURL: 'https://avatarko.ru/img/avatar/5/zhivotnye_kot_kosmonavt_kosmos_4182.jpg',
                followed: true,
                name: 'Victor',
                status: ' i\'m cool Developer',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 1,
                photoURL: 'https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-a-neon.jpg',
                followed: false,
                name: 'Victor',
                status: 'Hello i\'m cool Developer',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 1,
                photoURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEX///+gWiwAAAB4RCFuPh5TLxejXC3/AAByQB+mXS5rPB1qPB18RiKjWy1XMRh1QiBlORyVVCmcWCtCJRKJTSZcNBk6IRApFwtJKRQwGw1bMxmCSSQtGQyHTCUgEglKKhQZDgf19fW8vLwWDAYOCASnp6cmFQrs7Ozh4eHU1NTKysofEgl7e3twcHCamppiYmIiIiI1NTVWVlZLS0s+Pj7BwcEWFhawsLAxMTGIiIhfX1+goKASEhIoKCiUlJQyMjLvAADTAABfAAApAAA/AACQAAC+AADgAACsAAB1AAAVAACgAACRRql8AAAd1ElEQVR4nN1dCXfiSJJuhKTWjSQQ5rIBg8Fn+S6Xy1Xua3p6dub//5/NyEspZerACFPleG+3p9uSyE8RGXekfvnlx6FP2sN832vYJa2/a5p2te9V7JDONKDP+17G7ugYweuuNO3DiikAdIMLTdv3QnZFCOBSt4yldrPvleyIzhEHdS80NO1h30vZDYGS0dvt0VTTLve9lp3QGvag124bA0173fdidkI3mhYigLrR17THfS9mF3SnaQYC6CXGRNNO972aHdAlsoMIIBLSYPYhjQWyEysMUDeQKr3f93Kap1NkCDsAENkKpGie972e5ukzUqNtTAYomuN9r6dxuiJaBgtpcKBp630vqGl60rQhAdhOjGCpfdv3gpomMPXtNhNS5NFc73tFTdMDMvUUoGsYXU072feKGqZPzBJiIf2A9h4ZihkD2DFgG340e39L/G1MoQH2/oNtQySjAwawHXzAbYj06IzhA48NrOHH2oZ3qR7Fesb4aNsQOdx9LqPIGII1/Fi50m+a1uEAkTH8cE7pK/dHqZ6BROJHSpXOBVPYbluIhcEHS7OhkCLhAD3QM92PlYQ6ZXE982ewy3a272U1SF952Mv8mQ9mK07TqJCaio9mK64yLHQMYis+UKYUsXAisDAATTr7ULbiiqS4BVMBccXdvpfVHM0zihS7pCCkT/teV3P0KtpCYio+mEPzTVt6nIdeSIX0YyS756dn5+cvKKgIQx2BQzg9bCqC/k8f/K7PTy7vvmtZuph0DTdkQvoTp4JPn64+a8W0RDh/ZiF9vLzhUPqDxLHa3ng89jp6GHQnKcqfNTQ8v6IIVoHVa9m2bSLygdA/0b/a0TjsLsgl319/uhzN+pXI5iIYxwib31KRb9pmZHUJyPufio9n14R5YVQELiXEzrFBQH76WYzi2R1eb9CzzQp0jJd2y+vje55/BoynGN+R5dfFR0FGhJE/fKQ/x+pl6JmbwCNkxyHG+GN7qCd4+43tqs2nJrOFMT78uHr19AG0Z/uN+AgfA7wd942kgDADE39z+cxgjIboKV9+RDaeAQOHkb0VvhZYDwve1OWPplWJBnW3EFABY4xNx6d9YxJpfglLmm3PQEq2i7Xqj+PlPOH1TCvdlw0g9pbYk/sxtuP6HgN0mmIgJr811H4UUT0hPuW4UYCIbOLj/LY3NqK4/fn67pbGf4toOxuhhOiQZ3++ub27fj45f880wPz46ls2VO82zUEMcZj9kW9Xx+9iQuYnD+mPLi5WRzNQCtEOEEYQ/8+OVheL9AcfTnYN8uwr+aVZ3wh1jxLyJnvN6VFG/iEkxynp4XSyJD/9dZdluEfCvv7Igl/lSc+ppsWNA2y1YmSB0h/xPMvorwgjd1XFObuFx09GbSEpjwmFEzvZh0dp6yJBaSVG9wIWcbsLPs5xZqKr5+FhFobNq1LkvYUiE3ktbnoAC7lufD9is9ftSPja7Y62GyHFYir0pPBSTmBgjM2myefgWA9l/gELu5o22oWQIjEdCf2ZnKBFbIoEWLtrkI0webVMVPjaHjjJO8EHBN6gLDTQf4NzkOdNAXwB/amCBwiReuvsYhcCmZ1ssTGVVESgV1+aAQjJpZGSgQgg8h4nu5FRIPsg0zzFCSo6mI2N9Deg0GGh3IFAEI9HzVt7Rj74NZbid13cwbFspKaDjPxKsoCchRNNS3bHQsTEJNvXkIVozBpoFvuSaZPMAww07WKXABFEZOGDQogB2oy/bc1BWV9zAlOo9EhNqDTFMdSYqrRQxaV+T2UUgUh1dbIlF+9LAXpDpSn07dgzaOQzNNpxSXoKXdpOL/VUl4JRHCrXkDCIW+zF63KASEYX0ns37V43G9cNiko08qVdxaXmokiVBxjiwRYa9bno7aUyeph/6XZEqkg318+fPj1fkxxAX5mFq3lpsZziVhUjOHpzPedYbW5FGQ3yy7Fx5eH2hKcc1ie/wX9xZYgkZfibeCkOXkLpmUHRm9YJxNkbE498+LEAINLjyzwHTZC6h1xocw4L7+alz4dLb3N+F06cy5ciu6f2GfFWhFaHN00yfFf5hDkZza8FnH5FdQwCk2Hu0qE6PIDc60H+vR0WySnZitC8+X1zgJcFdkiQUSMnTyb6bzfKl3n6De0w8WrIMn1TX/oZvY3cm4PMYqmc9t9wVsF5maUH+UB6NCej9rTY/M6/Z14ILPl7UfCDnIxpfi8uM91w4joMZvk3DTTQJivB126jnxxn37TZRmwpDNnmSNA8doPpaSW9enPE8Hbu2eOi9RB9+oY26ktxaEcmCHsH+fdcvt9PxThyg0sp0wcFppn2/sEg+EZyelZq6knYm8tcgE4vTSy8cCcd3OnSyO5FtkOxMhgGIgjB8G+SnrrNZbnyCJGRtUxpCRX67Ia9FXRpxTk036UXaKI47Uj50ikT0c6+rQ/wqTjkxQDBBOf1aFhpdpEH4cJrMd06l+bTd6B9VcEwYyIMpdRv4yh6XYwg7M0vYFE9a44eC+/FrnFYEtLUuVeIg2Hl+6ZMDBb1lc1LptdcfmRX4a5FNTooLkl9I6qhFJ7lUghsdKVyYOp0UD9vUxBWM9IV2TVTr2GQHvHuhR1VmZZH5liXogwNH0UkE/Xd6h+k9ZKZ+JBZeCCrGWzCVQW+46u7K7471pj3wAt26enr9ddnld1Yyx4TfjUHqldvbcrEChYilXIgRQqgBxTrJK3P3JPDrpvd55e+kqhQJd6yLiOZN6WVDgweR9UB+FSxC2eqzIW9UhiAOY9sKc+W8G7QOqlO+sT+rNiWN4pqD9TbZsVpKaxO64RRD9pFGcCRsuJrzhTW6IojvGYIj9A+PKKGc53G9rKg3mgzOTEQr9ThANM1SJ3WSNoglykokVFvIVsKQHghO90pC5kT+h0jXFGEn9I/y3J6q10oEIK/r3r9IwqxXydQvCx1Z8DYS44/kVLpUMdTASFxqHB+3J7Q3ZKyWJFL+qyqSUb6UM1EJqZGHe+0PGryluqavaA+ShGKmqYUYS6epAgdpOaWZWJ6UK1rHsv1TFDQd2EGsrWQpBRBHiEpHVFRek3/LL14MCyylEYu2OKRSrRSXVNla9GLrVCkynovVIkkNXbNEZDZu2Mc90EceUwBZ1ks0LGyohU5+lKpTpnnBjPhVanF8rAp0VS+Bv5xxaNTZblmbw8ihphd+sz+LC/qSrUZzJ5jQU1NEe3rtcX0rChbQF4VZJo8ZQrbVj36NMOiObXioGqIbr0sAviLyqtA9tCxYAUKx4ZtRBDT8jDxU1FSi7wpWI+6dQYcU0UAfHL3cMc8qRcqeeB90f92dnn/cKXwZ0+UouJ7uoVLALJ3yjeiUeW53ZXFTR7OwRe1sGlV8oHUYP1LVZVzs61bOE0ubyQvSY1++cBt+TbEMlXQ4AUhcGn8hETSIS8HQuBSs/Ws1me+pdMZInlpTNUYk/K3V+7QjMoQ4gpKSQCFzNCMbS17VqrUz1UVH0Sxo1sofjhQ6Qquavrlw4znZdYQCr7dYoTgFxf7TKfiDsbFltJLpYoPUEQQGqrgh0VQEEKVBaon6qo5oQ4MuJa0IeKqTMG6YdVCyWWDSwUh6RGEyUqlDo1U1ZSl/F7L7D2yplZS1mgJSU31C0QimnVnIT+uFtTz/KWpkIwJwnCq2EuegLCs1lbm0YCQxqUICUSFDrmUV40hFlwq5ZopDy0da5rQUYipaC7KvJpSnw2scFJsLfC6sTLKSQmZpZGqgknRpYU9ZK6OrUVoTWRt6o3qIbwuQRjC9qhqlrU94kmf06rE/Bz7LUtFo7s9Xqou1bwigEjRYISunigUYpIiLDvZ7rIYIZj7nq0XeW2MzFZAXLGb++vre9roPmopvfXWSL40UF4K5I91hBCxT9fHstlOTX65rX0tropCJh8XjaQ8W543cXihCXQUxkVcyV96UXwpIh0QIj1quZGcsuYIKw4FPy6x+BCT4t7ryj4904x0YzJbLmcTQ49KO2pMu/alIKS6vtAWltPqyxuRIaw4Fm1dnElEnlZiQpAk5TGVGG1K2TXDqDr6vxxIdmnpqwNbgQipO8sBlZ5P6Qpp4dLJjIdCMQ3wDjSV2YUaBJPpcdQbe5437kWxWT3knX8A4NPRe+4jhJ4ka8xaDKp6pI4L0spE0ZhQVVHkwCrJtHthfybsuFk/rD3qTYgIKdJNA92JI0nVUItfo/PkoaCGBfYercjuvqEj2GyFS02mZVioN2VCsSEQuDO6E5nybuJ+d1XGFLxCVdUCqdKlTWKkTadHbE+Fr8hMFlCMWYgNvu7G9jKvTHUmo9UJU3ArFN43WiWkIHyvKFFTDNAtwAek6JVSkn9IECI9YgHCYb5xAceHU9lLUtElfBFFhkjTiDWVaUqQhSuhuj3iOiFNWyGEeLNklzeCDv5lzXYFmDyQ256pQ2wv0kC2FsWlAGuOakDgBISsRBchNMHFz6yuQzlY88gwyHPm+8g6lHcQE2wyqGaPKhDWmtXwLQwQYqcR+qcJq8iEiCFpbK991jLk27teBqNFEUKirL3BRvQXFQiV+YocMRaCz4b+0fbzCDs4P7NJnylMWMxcEWKHRXhRUYCqXltUAbCeRFh8Gx6g/zn281KaDEBdbzR9AZG21hV79FnBwl5hw1iTfK8SYXmsgh9CWagHYO9159DPahovwYNQGza2zfEopZFiZO6amWwyJGPqlQirYhVEFCCkg0OEMML1K46vjTOMXzefgjqG+5ZTOq7mMYSQJ8v3ipYgLDOGhNzKbv6xw4V0hoTUiTFCuq7OFD/lbacTkInYYQITo2llFBp+auuaCmtYi4cRA4jC9wHsSKLRAxgrTUij/1sPQ+Fl6MUBeM1jsmHAcTPqTgL540qE44pH+UzNgCYNQZWa5LGzA66n3zqnhyL+nsVHxnkOMwLHou5MZZXBrzT5qYy6RJM6kC0mHfNAR0ZFlruChz3bjr3E6E7DdEoAFFnYrslE+6ACoNw2k6XIZSyEZjMdKxp4bhROJ/1u4FrWFghPSHbdN7OxOohIX1fm3RUsCCsQVvnxOiek90BgHfbuIt2yaLzxVil9KtgkYBJdJ5s3NYtivSoxLQRox+hPfpvhs5BymVrYoyF/pxEjtiFvRXgstGZn0HSwAyxuIHOgddTiRjK/heQUIDTjrjYw002oW0vsselOj91BNZBVo/+iiM6LVDmMeDi6leNUkQ9dFP8CHRQAtKGQpbV6rsjCLhZS9mLZBrVmbxm2IHRalDoE97tvOYK2MWG4uq9O/PZKEBaUCIiqXHFLiIiyULeYkB46nLkbtD9nSdUCSVewgOS6m8owPU2mp5zgKvZrxuoXSA6KwsaPsXDAWMiE1OykGujNB0nPC49lgdz30NIdvkJm2UNVAq1wK7aVT7eZt54C1B32ry4T0pjxN9zm256qFki6igmORVOINpwfoxWcZ2arTYayBmP6IA4PV9RDS/UlVqSpJu0JCN9+1tK9phUgBP97qQsQIeR4PMZvXjUIqgiiZso9aI/BFXueZ1k4Ij43M/ewAC6kxjaHgl0Wx6ew8WBjcIgRzFusYbpuomCjSacpUzJaClNrxpAPRJHeNeMZIYQ6yegZwdUZbPPhiJeS5CjYB/hVx6OQp3jeAbIDWhDL7LHHEwFfVyXMJokmr0jjhiCjfVDdGWPoc0O5jcEv6Jhny3GInOpOhzMRLC853EyXNY5v9wwSDKwSVZXJt8dgcj5DqJ5VpCP6SzoETpRS+DWbu9W0VgxWpDRkb1bHsRRoTBynHYOJX3bkUpKP3PjeYa+l0rcm5TGu/V1T05DqUSKjDneGe6mlROH92xEqO+b5mqBKbYjCs2Q7AneOzixfca+vPBvTtD0cpV3jIAEprIWVYRLDy6/negZU6Tbn1n4trcMk6cv1wPVGNpF24ZODFDWlNMqg7djFdak78n7WGRmFTXhEADo9Sc9gVbrNsVGfyuow/iGkSMhvOTrS/bbQJbAmzaP9tlImRe6ZpCGQ4cODa6keBX9UYyLJb2pnXsA2Z9WdFzv/QB30+Bn9KddDEnghWN85TYJ0O1HB2REo7ozbJJGkXfGS0RV2lxiAEZcT3eWWS/BXrYXcQr8JFftt5Jd0FCkeMYWg93D+V5CZR3LutXYUtKMWPpTdTw9lb0VeQBMAX4Rz5l7Sl6bjQgXd6zg/Q9+Ml17gbntGDbLgJbE8+qkFSZ4QjFYE7qlof9cn98wEDgeh0x73EI3bbjLg1vEmc+L8eWYTgrfHtAz3SMVdCNtwu8OjSzciMvu6gxTohAuVAyM1uRrl/Pgy/+UHTjdfT7KbCAq0owxAapAENZPG/dtvQ9z3XdZdgvxfCI0Osv6HXIZdP75e3Uj4vj3n3S1wR7mWsQAg35Id/qLFqBEFh1+2AggWsfQ8PSSnsI6L9DdB+xQ4iuvTs/Pn3Ncu7jJe8xfB1EMfpKBzuIz6gr+qJ9sfja0cCxAJbRAkqIt0a+AMa4GJWt8pRDXdRw8CJMsQRBTp0bT7VmRhZWt+NT1WFRaQzLjgbiaphgcuKsvpZwDoX3//+5/ff0X0+z9//Of//qulyvBekHfc0J0CTJMBscBBsBXbf6+t6thHH7JFKy1jpQearMPXp+dwcsmf//yapX//l3HxHhfpKYEd4SGwkBEyPYGF28X3jK6Ksin8N6F1F9g2TF8tSNh3ouPWjyeXd7dcJH//NU+/I3v4uMYnZzAOWgk470G64QSRESxFI0JKjgApLy346LVi52qZpFoClngyf/qa33T/kRD++i/47w+CSsYSugxTgMLvizKqW5VHF9Sim8oyrdl2KKY+/3FnJcBarob9wdQYIWP5p4zwL3oV3XUW7sgc6hygm6Y7hAwxUNDMcdjI6BvSUTs56sAP4/iHixbejGhndYNQt4B0EgjJYoqYFwxT5wz74UbKwFSNtsyMjOJsdxMnRKNgZqVXtRNYDt192oRJlxUeLQ3HEq0X+Fj/ywP8A1SKRZZuWfABcu0iVALM6lGsZ5r55N41eIpV9ULgouVgNvZdhtHS84T+nEf4J3dELWuE40QxByUCFN01nVilZk7bPQM7XFkvbIOgWiNcpOg6MjYuun9LLKR+rZXgvTt0hZsdAaA5drNP07b22BjdQzGt3GSAocK/b5F4bxiqMYKJ/iNnKzALLd3A/DtKMjcKSTs/uwmxxm3qmzSPoOfcqtK9SQpFlk5VjKGrQIIXKxj93//Cht1yu5j5s5F4D8viEYqc3KO0Br8/+x2SFU7V2fkmXQPCSApq/ZEMEqsjbhT/A1e1XYOYllUGH3LVxHca5x80aPKw5EdirKq0jR93mEqka9b6hpvTNxjiX//7459//v03XHEwZZeG2SvTUigm6V0hM9sYQHyqEmyWCoSQiubJ9rBLK6P4gHorXT3xDXIkybTTiUUO+u2cjMIubPK863Oi8KxCaKmkWjzdbiVd3vCyGHanQRK6mJxcDWM1dfMccrKNEL6X34Qo8N4qAyXRPcl4dYqQCSTodMsKp8M8u7I06wcSvDwDmZ4WWThs+jM0pyQN7dSA6McZiUIog+5kJmNbXvQHicorgKRd9okSByH+b/pr85ckXKsDEVkuK7sktAsdNwmMQbePqNudGkHoqsABPmecq7vJALFZbfzzLBpNb9fq9/J7lrQqCtWy1MgoPncc5+yupGSImtk+8s3TMY/fFMVBiUwz6igxlpKrS/ho3JKlsEljn9Idd4nrNSaakedsAtJxOz2pLmzGuvwMq3zY/c20ZnKqu70aXAT5avU6NUGiy8aRXHjzI8W1IKO1m/I3oicUuBEmulU9oZwFZtxrO1UoHdcaR8qyfk91J+RRd/Q9nWueaXA7dTYjWaXfisYdXQ0T/VfX8nqxr35jshIFWjb42Yc8LYUsxSbfsELiB6OHyGQ4gAncGviH3oZRxAJ0yK4q9TGkLnb3BcgzLS0MueMiphVAh6JaK44Q9Xrw/2MYJ81fm95s9vJ+DAHY3egUz43pJO2KgFpa7ihcOBo/hvW3apynL0EjN0eRCfOlOccoBQiT4jv9PtmVmJfOsBFmlgc8hTgM2rVq+PzmnpPe3A+8QxU8nVjCXX7R6hdcPOHVBFK9xxJoR9m5c7zQTqvW+BC6OZH81gNligBKec1+I0gmqPAJvS6uB0qVfwFg0R+MkiTosoAiKZuvp2T3+izMmKKbDX5zV8a42IW3lieo0g7EbNi4FWN8SwOhxcV627aRqSagw4qZbfr5gGUg3tyjEeQ0B/Fiu+6gunSW+2mSXeuPs5+pRkuNwbvSZsquWg4Q92V2x2amoRHdHEH5XJuJKTvImDcdMqnpPAsR6mD9SPWZDtOGE+zUx+mQC2KQyK76ZrOzzP7Qqrn8aBUdC78Mc+hLr+gzJKaPuymK+vGhA3wxLtK55GQQrtcQBz+/20eCj5m6wbX2btlYvQ0oJuo/QWvKoOysCHzziqi0WclJ/DugR/pyw1IhJJw4RPrhQCWGMHCgV9wcLYkBhl6Bm3f9zDPsxQMMsGKNiOBMmb4cGAF/Ck/b4RDbaPdNOiAq76NkUgKNejSr8xlgfwzKSBpriJdFvfoZimD/gT5qpo62Ca1xB1CdWfPY1WfSfBFMgdY5UMHH0dJ7GHoF3VeP1mEyO9jbwhkY3LqHQEdhzU/sIgmAvdDQR/I2pJuaByLAoZzQ2Q9h0+F47EE47KbHRFZQ5IBLsU0b8JvpufYZIHAa4AF05Lks0oeUtXIsTkEk87SHj1fP639BNiZhTxp2wb/VEvAWGR1JGvrQ4Wb0quaC8jtzFuFawj3MfklTZz4hPCYS8P5MVH8X0DxUbE3cYRCKjYYlH770c9kRnG9L9rATz5UdfTCYqFq0w0/twDTF54YpyZ7m5RfK94106G1I6q5MsHIyE8kwJIJlUCEt+Tqr/AR8mGB3hxnEAkoPa87ky8QznPkfCEKXiykM1mdrWOkz4JgJ4cQGyEM6RMZ3l0JU0imXM/OQz5NhX5OLn99jxoQgtJYsT4ePKBEBmmM+bwwRVXoau3mok/4Ha7c5RAWlg+yRYBZh9owr2Ji3iJNBM3JOl05ELnFEUYzEkWrRkKA/hAThVhNqbyE+mYhPiuGDpIG4O/lSxbPW6GpdR9jFMAbH9yUcwsARwghgj72V97UXfCAqop84IqsT1QR8mIUiaDPhnOLVLrSF7gjFHTgxiAPOHEQF83BEPW01KfoW+kIPF4TXn/pucFAchwvfQKBmnTsyJDGAa1iCMoVR9/S2EB9fmDIRj1rCdFBTLV71iJnsrHI3xT0E30Ag8kvHrl2adLGwAydsxFiMM8zMIbDwfHx31afadoCQQLEzR/xnl8oVK62xMITkPKt0BgYuHHGuZU/1A47iXrAtxwzfgpAAizMnf0WZmVP2N3ZEByDsWJbVIU44NzJ+5mBbOAQ2nZeDOf8B5WETDc/1CX8Th7x+YWooEpkBCPHRUr7L9+EMuk36pJbMh+3gIBEvY1PTR8IPwOZ9/314TfRkbjlRxt+0Z0TvsLbJQOgWgn9nuiZ7nqb8SKye3l2X0i+/maUIj/AH8FjvMm1tJwRsZe2cZuYY9BxCj/Kw1neOmqRHunXiTBYtK6X2Ch95yk9ZWTG35IQZOYpilEF4mIlaErIP3z+4mNM9ZmeC9aymITzkY9cuT3me0uYjh3h4OR6OBU3jHw6ILm2sLb8+XZO9k7WHGWsB+3Bls8ZhLGesuPmFDoK5ePvBPkybLTOaNYYhDoccVP6+2xBnhFcmWZ1wSk0mdie6lCUuIG3Nbn5is764eRx0aRowQfjEPDoTvmyzsEj1/p0BYt+7a/qgXNLjrxHXZhmZNWzaEoMBpvXpL1ATwIKKIIJcpjvPTD9OgOIvfL4IHuh+bxb+gtvbVz0b/Guu6iHQ4DILalBnB4/mzoc95dVPUKix+MGH9BlIwEHBuMphv/egOcy7dg/Hgq7BzjYPFpFogaGwLAePUmS+rYZnLYeJhby3Q9OcCZ63fYE1MN6E8GIm8LnmdyluKwiPvMLvj9nZ8YhtHXaIPCgh3QmDLukiySUhTslI4nA6CjstJIsxu6sF2gooRjeznve9pLyBHvkY+vJiMhz2+0hkj/qMxPN1v8pNME/pcDfiIb+LPGI4PEg7+q/3kPDmdPb8Rauk+xd1F9P5pTzBXvvmd6T52dPr5fX9l5vP38SVffv8/fb+6vLT8WlZfmV9/vR8ef3w5eabdPPd1eXLcQPc+3+qumWdjG72zwAAAABJRU5ErkJggg==',
                followed: false,
                name: 'Victor',
                status: 'Hello i\'m cool Developer',
                location: {country: 'Russia', city: 'Moscow'}
            },
        ])
    }
    return (
        <div>
            <h1>Пользователи</h1>
            {props.users.map(u => <div key={u.id}>
                <div className='general__wrapper'>
                    <div className='users__interactive'>
                        <img src={u.photoURL}/>

                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Удалить</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Добавить</button>}
                    </div>
                    <div className='users__info'>
                        <div className='about__users'><h1>{u.name}</h1>
                            <p>{u.status}</p>
                        </div>

                        <div className='container__location'>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>)}
            <div className='button__more'>
                <button>Показать больше</button>
            </div>
        </div>)

}


export default findUsers;